// Original file: proto/user-mgmt.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _usermgmt_Empty, Empty__Output as _usermgmt_Empty__Output } from '../usermgmt/Empty';
import type { GetCurrentUserResponse as _usermgmt_GetCurrentUserResponse, GetCurrentUserResponse__Output as _usermgmt_GetCurrentUserResponse__Output } from '../usermgmt/GetCurrentUserResponse';
import type { GetListUserResponse as _usermgmt_GetListUserResponse, GetListUserResponse__Output as _usermgmt_GetListUserResponse__Output } from '../usermgmt/GetListUserResponse';
import type { LoginRequest as _usermgmt_LoginRequest, LoginRequest__Output as _usermgmt_LoginRequest__Output } from '../usermgmt/LoginRequest';
import type { LoginResponse as _usermgmt_LoginResponse, LoginResponse__Output as _usermgmt_LoginResponse__Output } from '../usermgmt/LoginResponse';
import type { RefreshTokenRequest as _usermgmt_RefreshTokenRequest, RefreshTokenRequest__Output as _usermgmt_RefreshTokenRequest__Output } from '../usermgmt/RefreshTokenRequest';
import type { RefreshTokenResponse as _usermgmt_RefreshTokenResponse, RefreshTokenResponse__Output as _usermgmt_RefreshTokenResponse__Output } from '../usermgmt/RefreshTokenResponse';
import type { RegisterRequest as _usermgmt_RegisterRequest, RegisterRequest__Output as _usermgmt_RegisterRequest__Output } from '../usermgmt/RegisterRequest';
import type { RegisterResponse as _usermgmt_RegisterResponse, RegisterResponse__Output as _usermgmt_RegisterResponse__Output } from '../usermgmt/RegisterResponse';

export interface UserManagementClient extends grpc.Client {
  GetCurrentUser(argument: _usermgmt_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_usermgmt_GetCurrentUserResponse__Output>): grpc.ClientUnaryCall;
  GetCurrentUser(argument: _usermgmt_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_usermgmt_GetCurrentUserResponse__Output>): grpc.ClientUnaryCall;
  GetCurrentUser(argument: _usermgmt_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_usermgmt_GetCurrentUserResponse__Output>): grpc.ClientUnaryCall;
  GetCurrentUser(argument: _usermgmt_Empty, callback: grpc.requestCallback<_usermgmt_GetCurrentUserResponse__Output>): grpc.ClientUnaryCall;
  getCurrentUser(argument: _usermgmt_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_usermgmt_GetCurrentUserResponse__Output>): grpc.ClientUnaryCall;
  getCurrentUser(argument: _usermgmt_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_usermgmt_GetCurrentUserResponse__Output>): grpc.ClientUnaryCall;
  getCurrentUser(argument: _usermgmt_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_usermgmt_GetCurrentUserResponse__Output>): grpc.ClientUnaryCall;
  getCurrentUser(argument: _usermgmt_Empty, callback: grpc.requestCallback<_usermgmt_GetCurrentUserResponse__Output>): grpc.ClientUnaryCall;
  
  GetListUser(argument: _usermgmt_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_usermgmt_GetListUserResponse__Output>): grpc.ClientUnaryCall;
  GetListUser(argument: _usermgmt_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_usermgmt_GetListUserResponse__Output>): grpc.ClientUnaryCall;
  GetListUser(argument: _usermgmt_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_usermgmt_GetListUserResponse__Output>): grpc.ClientUnaryCall;
  GetListUser(argument: _usermgmt_Empty, callback: grpc.requestCallback<_usermgmt_GetListUserResponse__Output>): grpc.ClientUnaryCall;
  getListUser(argument: _usermgmt_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_usermgmt_GetListUserResponse__Output>): grpc.ClientUnaryCall;
  getListUser(argument: _usermgmt_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_usermgmt_GetListUserResponse__Output>): grpc.ClientUnaryCall;
  getListUser(argument: _usermgmt_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_usermgmt_GetListUserResponse__Output>): grpc.ClientUnaryCall;
  getListUser(argument: _usermgmt_Empty, callback: grpc.requestCallback<_usermgmt_GetListUserResponse__Output>): grpc.ClientUnaryCall;
  
  Login(argument: _usermgmt_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_usermgmt_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _usermgmt_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_usermgmt_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _usermgmt_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_usermgmt_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _usermgmt_LoginRequest, callback: grpc.requestCallback<_usermgmt_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _usermgmt_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_usermgmt_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _usermgmt_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_usermgmt_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _usermgmt_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_usermgmt_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _usermgmt_LoginRequest, callback: grpc.requestCallback<_usermgmt_LoginResponse__Output>): grpc.ClientUnaryCall;
  
  RefreshToken(argument: _usermgmt_RefreshTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_usermgmt_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  RefreshToken(argument: _usermgmt_RefreshTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_usermgmt_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  RefreshToken(argument: _usermgmt_RefreshTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_usermgmt_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  RefreshToken(argument: _usermgmt_RefreshTokenRequest, callback: grpc.requestCallback<_usermgmt_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  refreshToken(argument: _usermgmt_RefreshTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_usermgmt_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  refreshToken(argument: _usermgmt_RefreshTokenRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_usermgmt_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  refreshToken(argument: _usermgmt_RefreshTokenRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_usermgmt_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  refreshToken(argument: _usermgmt_RefreshTokenRequest, callback: grpc.requestCallback<_usermgmt_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  
  Register(argument: _usermgmt_RegisterRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_usermgmt_RegisterResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _usermgmt_RegisterRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_usermgmt_RegisterResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _usermgmt_RegisterRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_usermgmt_RegisterResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _usermgmt_RegisterRequest, callback: grpc.requestCallback<_usermgmt_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _usermgmt_RegisterRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_usermgmt_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _usermgmt_RegisterRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_usermgmt_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _usermgmt_RegisterRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_usermgmt_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _usermgmt_RegisterRequest, callback: grpc.requestCallback<_usermgmt_RegisterResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UserManagementHandlers extends grpc.UntypedServiceImplementation {
  GetCurrentUser: grpc.handleUnaryCall<_usermgmt_Empty__Output, _usermgmt_GetCurrentUserResponse>;
  
  GetListUser: grpc.handleUnaryCall<_usermgmt_Empty__Output, _usermgmt_GetListUserResponse>;
  
  Login: grpc.handleUnaryCall<_usermgmt_LoginRequest__Output, _usermgmt_LoginResponse>;
  
  RefreshToken: grpc.handleUnaryCall<_usermgmt_RefreshTokenRequest__Output, _usermgmt_RefreshTokenResponse>;
  
  Register: grpc.handleUnaryCall<_usermgmt_RegisterRequest__Output, _usermgmt_RegisterResponse>;
  
}

export interface UserManagementDefinition extends grpc.ServiceDefinition {
  GetCurrentUser: MethodDefinition<_usermgmt_Empty, _usermgmt_GetCurrentUserResponse, _usermgmt_Empty__Output, _usermgmt_GetCurrentUserResponse__Output>
  GetListUser: MethodDefinition<_usermgmt_Empty, _usermgmt_GetListUserResponse, _usermgmt_Empty__Output, _usermgmt_GetListUserResponse__Output>
  Login: MethodDefinition<_usermgmt_LoginRequest, _usermgmt_LoginResponse, _usermgmt_LoginRequest__Output, _usermgmt_LoginResponse__Output>
  RefreshToken: MethodDefinition<_usermgmt_RefreshTokenRequest, _usermgmt_RefreshTokenResponse, _usermgmt_RefreshTokenRequest__Output, _usermgmt_RefreshTokenResponse__Output>
  Register: MethodDefinition<_usermgmt_RegisterRequest, _usermgmt_RegisterResponse, _usermgmt_RegisterRequest__Output, _usermgmt_RegisterResponse__Output>
}
