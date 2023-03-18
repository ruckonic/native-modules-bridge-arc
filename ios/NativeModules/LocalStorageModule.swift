//
//  LocalStorageModule.swift
//  RNLocalStorage
//
//  Created by Rene Corrales on 18/3/23.
//

import Foundation
import React

typealias StrOrNull = String

@objc(LocalStorageModule)
final class LocalStorageModule: NSObject, RCTBridgeModule {
  private let defaults = UserDefaults.standard
  private let keyPrincipal = "___superkey___"
  
  override init() {
    super.init()
    defaults.set([:], forKey: keyPrincipal)
    
  }
  
  static func moduleName() -> String! {
    return "LocalStorageModule"
  }
  
  static func requiresMainQueueSetup() -> Bool { true }
  
  func constantsToExport() -> [AnyHashable : Any]! {
    return [
      "keyPrincipal": "___superkey___"
    ]
  }
  
  @objc func setItem(_ key: String, keyValue value: String) -> String {
    defaults.set(value, forKey: key)
    
    return key
  }
  
  @objc func getItem(_ key: String) -> String? {
      return defaults.string(forKey: key)
  }
  
  @objc func removeItem(_ key: String) -> String? {
    let data = defaults.string(forKey: key)
    
    if (data != nil) {
      defaults.removeObject(forKey: key)
    }
    
    return data
  }
  
  @objc func clear() -> String {
    return "done"
  }
}


class HelloMethods: NSObject, RCTBridgeMethod {
  var jsMethodName = NSString("helloModule").utf8String
  
  var functionType = RCTFunctionType.sync
  
  func invoke(with bridge: RCTBridge!, module: Any!, arguments: [Any]!) -> Any! {
    print("argumnets", arguments as Any)
  }
}
