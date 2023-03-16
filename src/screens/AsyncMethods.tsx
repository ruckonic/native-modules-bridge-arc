import {useState} from 'react'
import {
  SafeAreaView,
  Text,
  NativeModules,
  Button,
  View,
  StyleSheet,
  FlatList,
  Switch,
} from 'react-native'
const localStorageModule = NativeModules.LocalStorageModule

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      AsyncMethods: undefined
    }
  }
}

export function AsyncMethods() {
  const [todos, setTodos] = useState<any[]>([])

  return (
    <SafeAreaView>
      <Text style={styles.title}>Native Method</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Async Method"
          onPress={() => {
            localStorageModule.getTodos().then(setTodos).catch(console.error)
          }}
        />
        <Button
          title="Clear List"
          onPress={() => {
            setTodos([])
          }}
        />
      </View>
      <FlatList
        data={todos}
        renderItem={({item}) => (
          <View style={styles.todoItem}>
            <Text numberOfLines={1} style={styles.todoItemText}>
              {item.title}
            </Text>
            <Switch value={item.completed} />
          </View>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  wrapper: {marginLeft: 8},
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  todoItem: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    margin: 6,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  todoItemText: {flex: 1},
})

export default AsyncMethods
