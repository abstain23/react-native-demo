import * as React from 'react';
import {
  useNavigationBuilder,
  createNavigatorFactory,
  TabRouter,
} from '@react-navigation/native';
import {BottomTabBar} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';

function BottomTabNavigator({
  initialRouteName,
  backBehavior,
  children,
  screenOptions,
  ...rest
}) {
  const {state, descriptors, navigation, NavigationContent} =
    useNavigationBuilder(TabRouter, {
      initialRouteName,
      backBehavior,
      children,
      screenOptions,
    });
  return (
    <NavigationContent>
      {/* <View style={{flex: 1, flexDirection: 'row'}}> */}
      <BottomTabBar
        state={state}
        navigation={navigation}
        descriptors={descriptors}
        style={{flex: 1, backgroundColor: 'green'}}
        insets={{
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      />
      {/* </View> */}
    </NavigationContent>
  );
}

export default createNavigatorFactory(BottomTabNavigator);
