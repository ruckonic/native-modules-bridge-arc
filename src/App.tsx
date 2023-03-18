import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from './screens/Home'

const RootStack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen
          name="home"
          component={Home}
          options={{title: 'RNLocalStorage'}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default App
