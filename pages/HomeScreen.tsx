import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';
import createMyNavigator from '../custom-tabs';

const My = createMyNavigator();

function Me() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Text style={{color: 'red'}}>me</Text>
      <Button
        title="to worker"
        onPress={() => {
          navigation.navigate({
            name: 'Worker',
          });
        }}
      />
      <Button
        title="to about"
        onPress={() => {
          navigation.navigate({
            name: 'About',
          });
        }}
      />
    </View>
  );
}

function About() {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: 'green', flex: 1}}>
      <Text style={{color: 'yellow'}}>About</Text>
      <Button
        title="to me"
        onPress={() => {
          navigation.navigate({
            name: 'Me',
          });
        }}
      />
    </View>
  );
}

class HomeScreen extends React.Component {
  render() {
    return (
      <My.Navigator tabBarStyle={{}} contentStyle={{}} initialRouteName="Me">
        <My.Screen name="Me" component={Me} />
        <My.Screen name="About" component={About} />
      </My.Navigator>
    );
  }
}

export default HomeScreen;
