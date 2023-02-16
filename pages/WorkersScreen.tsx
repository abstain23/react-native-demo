import React from 'react';

import WebView from 'react-native-webview';
import {View, StatusBar} from 'react-native';

class WorkersScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar hidden translucent />
        <WebView
          source={{uri: 'http://uat-dr-safe-app.deeproute.cn/'}}
          originWhitelist={['*']}
          allowFileAccessFromFileURLs={true}
          allowFileAccess={true}
          mixedContentMode={'always'}
          javaScriptEnabled={true}
          androidHardwareAccelerationDisabled={true}
        />
      </View>
    );
  }
}

export default WorkersScreen;
