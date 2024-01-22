// const mongoose = require('mongoose');

// const uri = `mongodb+srv://doantranbadat:NJpsmGtvzUuC0LLG@cluster0.6qe8hwu.mongodb.net/dapex`

// const conn = mongoose.createConnection(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

// conn.on('connected', function() {
//     console.log(`Mongodb connected ${this.name}`)
// })

// conn.on('disconnected', () => {
//     console.log(`Mongodb disconnected ${this.name}`)
// })

// conn.on('error', (err) => {
//     console.log(`Error when connecting to mongodb: ${JSON.stringify(err)}`)
// })

// process.on('SIGINT', async() => {
//     await conn.close()
//     process.exit(0)
// })

// module.exports = conn

const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://doantranbadat:NJpsmGtvzUuC0LLG@cluster0.6qe8hwu.mongodb.net/Dapex', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Connect successfully to ${this.name}`);
    } catch (error) {
        console.log('Connect failed because of error: ' + error);
    }
}

module.exports = {connect};