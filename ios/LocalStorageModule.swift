//
//  LocalStorageModule.swift
//  RNLocalStorage
//
//  Created by Rene Corrales on 11/3/23.
//

import React

@objc(LocalStorageModule)
class LocalStorageModule: NSObject {
  
  /// Set vars as constants in react native modules
  @objc func constantsToExport() -> [AnyHashable: Any]! {

    return [
      "str": "Hello from modules",
      "num": 18,
      "bool": true,
      "null": NSNull(),
      "float": 14.4,
      "obj": ["a": "a", "b": "b"],
      "arr": ["item1", "item2"],
    ]
  }


  /// Necessary to instance module without constructor
  @objc static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
