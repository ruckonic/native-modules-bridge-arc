//
//  LocalStorageModule.swift
//  RNLocalStorage
//
//  Created by Rene Corrales on 11/3/23.
//

import React
import Foundation

struct Todo: Codable {
  let id: Int
  let title: String
  let userId: Int
  let completed: Bool
}

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
  
  @objc func getTodos(_ resolve: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock) -> Void {
    do {
      let todos = try self.fetchTodos()
      
      let todosMap = self.todosToMap(todos)
      
      resolve(todosMap)
    } catch {
      reject("Internal", "Error obtain", error)
    }
  }
  
  private func todosToMap(_ todos: [Todo]) -> [[String: Any]] {
    return todos.map { todo in
      return  [
          "id": todo.id,
          "title": todo.title,
          "userId": todo.userId,
          "completed": todo.completed
        ]
      
    }
  }
  
  private func fetchTodos() throws -> [Todo] {
    let url = URL(string: "https://jsonplaceholder.typicode.com/todos")
    let semaphore = DispatchSemaphore(value: 0)
    var result: Data = Data()
    
       
    let task = URLSession.shared.dataTask(with: url!) {(data, response, error) in
      result.append(data!)
      semaphore.signal()
    }
       
    task.resume()
    semaphore.wait()
    let jsonDecoder = JSONDecoder()
    return try jsonDecoder.decode([Todo].self, from: result)
      
  }
  
  @objc func getTodosCb(_ callback: RCTResponseSenderBlock) {
    do {
      let todos = try self.fetchTodos()
      
      let todosMap = self.todosToMap(todos)
      
      callback([NSNull(), todosMap])
    } catch {
      callback([error.localizedDescription, NSNull()])
    }
  }
  
  @objc func sayHello(_ name: String) -> String {
     return "hello \(name)"
  }
}
