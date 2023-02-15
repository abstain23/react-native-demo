import React from 'react';
import {Text, View} from 'react-native';

class HomeScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'red',
        }}>
        <Text>home</Text>
      </View>
    );
  }
}

export default HomeScreen;
