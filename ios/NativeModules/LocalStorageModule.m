//
//  LocalStorageModule.m
//  RNLocalStorage
//
//  Created by Rene Corrales on 18/3/23.
//

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(LocalStorageModule, NSObject)
RCT_EXTERN__BLOCKING_SYNCHRONOUS_METHOD(setItem: (NSString *) key keyValue:(NSString *) keyValue)
RCT_EXTERN__BLOCKING_SYNCHRONOUS_METHOD(getItem: (NSString *) key)
RCT_EXTERN__BLOCKING_SYNCHRONOUS_METHOD(removeItem: (NSString *) key)
RCT_EXTERN__BLOCKING_SYNCHRONOUS_METHOD(clear)
@end
