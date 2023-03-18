//
//  LocalStorageModule.m
//  RNLocalStorage
//
//  Created by Rene Corrales on 11/3/23.
//

#import "React/RCTBridgeModule.h"

/// Define the module interface
@interface RCT_EXTERN_MODULE(LocalStorageModule, NSObject)

RCT_EXTERN__BLOCKING_SYNCHRONOUS_METHOD(sayHello: (NSString *) name)

RCT_EXTERN_METHOD(getTodos: (RCTPromiseResolveBlock) resolve rejecter:(RCTPromiseRejectBlock) reject)

RCT_EXTERN_METHOD(getTodosCb: (RCTResponseSenderBlock) callback)
@end
