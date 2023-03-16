import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import AsyncMethods from './screens/AsyncMethods'
import SyncMethods from './screens/SyncMethods'
import Constants from './screens/Constants'
import Home from './screens/Home'

const RootStack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen
          name="Home"
          component={Home}
          options={{title: 'RN Native Modules'}}
        />
        <RootStack.Screen name="Constants" component={Constants} />
        <RootStack.Screen name="AsyncMethods" component={AsyncMethods} />
        <RootStack.Screen name="SyncMethods" component={SyncMethods} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default App
