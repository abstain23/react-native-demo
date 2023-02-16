import React from 'react';
import {Button, Text, View} from 'react-native';
import createMyNavigator from '../custom-tabs';
import {useNavigate, useAppRoute} from '../hooks/useNavigate';

const My = createMyNavigator();

function Me() {
  const navigate = useNavigate();

  const route = useAppRoute();

  console.log('route.params?.name', route.params?.name);

  return (
    <View style={{flex: 1}}>
      <Text style={{color: 'red'}}>me</Text>
      <Button
        title="to worker"
        onPress={() => {
          navigate('Worker');
        }}
      />
      <Button
        title="to about"
        onPress={() => {
          navigate('About', {});
        }}
      />
    </View>
  );
}

function About() {
  const navigate = useNavigate();
  return (
    <View style={{backgroundColor: 'green', flex: 1}}>
      <Text style={{color: 'yellow'}}>About</Text>
      <Button
        title="to me"
        onPress={() => {
          navigate('Me', {name: 'cc'});
        }}
      />
      <Button
        title="to hide about"
        onPress={() => {
          navigate('_About');
        }}
      />
    </View>
  );
}

function HideAbout() {
  const navigate = useNavigate();
  return (
    <View style={{backgroundColor: 'cyan', flex: 1}}>
      <Text style={{color: 'yellow'}}> hide About</Text>
      <Button
        title="to me"
        onPress={() => {
          navigate('Me', {name: 'cc'});
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
        <My.Screen name="_About" component={HideAbout} />
      </My.Navigator>
    );
  }
}

export default HomeScreen;
