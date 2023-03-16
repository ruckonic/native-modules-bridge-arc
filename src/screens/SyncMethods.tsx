import {SafeAreaView, Text, Button, View, StyleSheet} from 'react-native'

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      SyncMethods: undefined
    }
  }
}

export function SyncMethods() {
  return (
    <SafeAreaView>
      <View style={appStyles.buttonContainer}>
        <Text style={appStyles.title}>Native Method</Text>
        <Button title="Sync Method" onPress={() => {}} />
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

export default SyncMethods
