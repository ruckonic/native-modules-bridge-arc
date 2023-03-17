import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
import {useNavigation} from '@react-navigation/native'

const NavigationList = [
  'Constants',
  'SyncMethods',
  'AsyncMethods',
  // "EventEmitter"
] as const

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined
    }
  }
}

export function Home() {
  const navigation = useNavigation()

  return (
    <FlatList
      data={NavigationList}
      keyExtractor={i => i}
      renderItem={({item}) => (
        <TouchableHighlight
          underlayColor={'hsla(298, 1%, 68%, 1.00)'}
          key={item}
          onPress={() => {
            navigation.navigate(item)
          }}>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>{item}</Text>
          </View>
        </TouchableHighlight>
      )}
    />
  )
}

const styles = StyleSheet.create({
  listItem: {
    paddingHorizontal: 8,
    paddingVertical: 20,
    backgroundColor: 'white',
    margin: 4,
  },
  listItemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default Home
