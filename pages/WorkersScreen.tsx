import React from 'react';

import WebView from 'react-native-webview';
import {View, StatusBar} from 'react-native';

import RNBootSplash from 'react-native-bootsplash';

class WorkersScreen extends React.Component {
  handleOnLoad = () => {
    RNBootSplash.hide({fade: true, duration: 500});
  };

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
          onLoad={this.handleOnLoad}
        />
      </View>
    );
  }
}

export default WorkersScreen;
