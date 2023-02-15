/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import {Text, View, Button, TextInput} from 'react-native';

type RootStackParamList = {
  Home: {post?: string};
  Details: {userId: string};
  Posts: any;
};

type Props<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>;

function HomeScreen({navigation, route}: Props<'Home'>) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {userId: '111'})}
      />
      <Button
        title="Go to posts"
        onPress={() =>
          navigation.navigate('Posts', {
            screen: 'Messages',
          })
        }
      />
      <Text style={{margin: 10}}>Post: {route.params?.post}</Text>
    </View>
  );
}

function DetailsScreen({navigation, route}: Props<'Details'>) {
  const {
    params: {userId},
  } = route;
  console.log('userId', userId);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>userId: {userId}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details', {userId: 'cc'})}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home', {})}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

function CreatePostScreen({navigation, route}: Props<'Posts'>) {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{height: 200, padding: 10, backgroundColor: 'white'}}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Home',
            params: {post: postText},
            merge: true,
          });
        }}
      />
    </>
  );
}

type NestStackParamList = {
  Feed: undefined;
  Messages: {msg?: string};
};
type NestProps<T extends keyof NestStackParamList> = NativeStackScreenProps<
  NestStackParamList,
  T
>;

const NestStack = createNativeStackNavigator<NestStackParamList>();

function Feed({navigation}: NestProps<'Feed'>) {
  return (
    <View style={{backgroundColor: 'red', flex: 1}}>
      <Text>feed</Text>
    </View>
  );
}

function Messages() {
  return (
    <View>
      <Text>messages</Text>
    </View>
  );
}

function NestRouter() {
  return (
    <NestStack.Navigator initialRouteName="Feed">
      <NestStack.Screen name="Feed" component={Feed} />
      <NestStack.Screen name="Messages" component={Messages} />
    </NestStack.Navigator>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{headerShown: false}}
          initialParams={{userId: 'cccc'}}
        />
        <Stack.Screen
          name="Posts"
          component={CreatePostScreen}
          options={{headerShown: false}}
        />
        <>
          <NestRouter />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
