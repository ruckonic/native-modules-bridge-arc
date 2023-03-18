import {SafeAreaView, StyleSheet, Text, View, NativeModules} from 'react-native'

const localStorageModule = NativeModules.LocalStorageModule

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Constants: undefined
    }
  }
}

const constats = localStorageModule.getConstants()

export function Constants() {
  return (
    <SafeAreaView>
      <Text style={appStyles.title}>Native Constants</Text>
      <View style={appStyles.wrapper}>
        <Text>{JSON.stringify(constats, null, 2)}</Text>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
})
export default Constants
