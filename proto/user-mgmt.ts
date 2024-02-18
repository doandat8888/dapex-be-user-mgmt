import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { UserManagementClient as _usermgmt_UserManagementClient, UserManagementDefinition as _usermgmt_UserManagementDefinition } from './usermgmt/UserManagement';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  usermgmt: {
    Empty: MessageTypeDefinition
    GetCurrentUserResponse: MessageTypeDefinition
    GetListUserResponse: MessageTypeDefinition
    LoginRequest: MessageTypeDefinition
    LoginResponse: MessageTypeDefinition
    RefreshTokenRequest: MessageTypeDefinition
    RefreshTokenResponse: MessageTypeDefinition
    RegisterRequest: MessageTypeDefinition
    RegisterResponse: MessageTypeDefinition
    User: MessageTypeDefinition
    UserManagement: SubtypeConstructor<typeof grpc.Client, _usermgmt_UserManagementClient> & { service: _usermgmt_UserManagementDefinition }
  }
}

