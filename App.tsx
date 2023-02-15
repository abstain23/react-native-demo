import HomeScreen from './pages/HomeScreen';
import WorkersScreen from './pages/WorkersScreen';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Worker" component={WorkersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
