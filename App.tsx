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
        initialRouteName="Worker"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Worker"
          component={WorkersScreen}
          options={
            {
              // statusBarHidden: true,
              // statusBarTranslucent: true,
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
