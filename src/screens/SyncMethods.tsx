import {useState} from 'react'
import {
  SafeAreaView,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Alert,
  NativeModules,
} from 'react-native'

const localStorageModule = NativeModules.LocalStorageModule

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      SyncMethods: undefined
    }
  }
}

export function SyncMethods() {
  const [name, setName] = useState('')
  return (
    <SafeAreaView>
      <Text style={appStyles.title}>Native Method</Text>

      <TextInput onChangeText={setName} placeholder="Your Name" />

      <Button
        title="Sync"
        onPress={() => {
          const hello = localStorageModule.sayHello(name)
          Alert.alert(hello)
        }}
      />
    </SafeAreaView>
  )
}

const appStyles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  wrapper: {marginLeft: 20},
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
})

export default SyncMethods
