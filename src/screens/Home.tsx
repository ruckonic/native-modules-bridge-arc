import {Text, NativeModules} from 'react-native'

const {LocalStorageModule} = NativeModules

const constants = LocalStorageModule.getConstants()
console.log(LocalStorageModule.setItem('KEY', 'VALUE'))
console.log(LocalStorageModule.getItem('SS'))
console.log(LocalStorageModule.setItem('KEY', 'OTHER'))
console.log(LocalStorageModule.getItem('KEY'))
LocalStorageModule.removeItem('KEY')
LocalStorageModule.clear()
console.log(LocalStorageModule.getItem('KEY'))

export function Home() {
  return <Text>{JSON.stringify(constants)}</Text>
}

export default Home
