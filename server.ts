import { ProtoGrpcType } from "./proto/user-mgmt";
import { UserManagementHandlers } from "./proto/usermgmt/UserManagement";
const express = require('express');
const app = express();
const createError = require('http-errors');
const userRouter = require('./routes/user');
const bodyParser = require('body-parser');
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
const cors = require('cors');
import path from 'path';
const userController = require('./controllers/user');

require('dotenv').config();
const db = require('./helpers/connection_mongodb');

db.connect()

app.get('/', (req: any, res: any, next: any) => {
    res.send('This is home page')
})

app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Use router
app.use('/api/v1', userRouter);

app.use((req: any, res: any, next: (arg0: any) => void) => {
    // const error = new Error('Not found');
    // error.status = 500;
    // next(error);
    next(createError.NotFound("Route doesn't exist"))
})

app.use((err: any, req: any, res: any, next: any) => {
    res.json({
        status: err.status || 500,
        message: err.message
    })
})

const PORT = process.env.PORT || 8080;

const PROTO_FILE = './proto/user-mgmt.proto';

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));
const grpcObj = ((grpc.loadPackageDefinition(packageDef)) as unknown) as ProtoGrpcType;
const usermgmtPackage = grpcObj.usermgmt

function main() {
    const server = getServer();

    server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), 
        (err, port) => {
            if(err) {
                console.error(err);
                return;
            }
            console.log('Server running on port', port);
            server.start();
        }
    )
}

function getServer() {
    const server = new grpc.Server();
    server.addService(usermgmtPackage.UserManagement.service, {
        "Login": async (call: any, callback: any) => {
            userController.loginGRPC(call, callback)
        }
    } as unknown as UserManagementHandlers) 

    return server
}

app.listen(PORT, () => {
    console.log('Server running on port', PORT)
})

main();