import createMyNavigator from './custom-tabs';
import HomeScreen from './pages/HomeScreen';
import WorkersScreen from './pages/WorkersScreen';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

const My = createMyNavigator();

function App() {
  return (
    <NavigationContainer>
      <My.Navigator tabBarStyle={{}} contentStyle={{}}>
        <My.Screen name="Home" component={HomeScreen} />
        <My.Screen name="Worker" component={WorkersScreen} />
      </My.Navigator>
    </NavigationContainer>
  );
}

export default App;
