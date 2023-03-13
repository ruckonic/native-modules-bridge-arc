import {SafeAreaView, Text, NativeModules, View, StyleSheet} from 'react-native'
const localStorageModule = NativeModules.LocalStorageModule

function App() {
  return (
    <SafeAreaView>
      <Text style={appStyles.title}>Native Constants</Text>
      <View style={appStyles.wrapper}>
        <Text>{JSON.stringify(localStorageModule, null, 2)}</Text>
      </View>
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
})

export default App
