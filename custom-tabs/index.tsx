import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import {
  createNavigatorFactory,
  DefaultNavigatorOptions,
  ParamListBase,
  CommonActions,
  TabActionHelpers,
  TabNavigationState,
  TabRouter,
  TabRouterOptions,
  useNavigationBuilder,
} from '@react-navigation/native';

// Props accepted by the view
type TabNavigationConfig = {
  tabBarStyle: StyleProp<ViewStyle>;
  contentStyle: StyleProp<ViewStyle>;
};

// Supported screen options
type TabNavigationOptions = {
  title?: string;
};

// Map of event name and the type of data (in event.data)
//
// canPreventDefault: true adds the defaultPrevented property to the
// emitted events.
type TabNavigationEventMap = {
  tabPress: {
    data: {isAlreadyFocused: boolean};
    canPreventDefault: true;
  };
};

// The props accepted by the component is a combination of 3 things
type Props = DefaultNavigatorOptions<
  ParamListBase,
  TabNavigationState<ParamListBase>,
  TabNavigationOptions,
  TabNavigationEventMap
> &
  TabRouterOptions &
  TabNavigationConfig;

function TabNavigator({
  initialRouteName,
  children,
  screenOptions,
  tabBarStyle,
  contentStyle,
}: Props) {
  const {state, navigation, descriptors, NavigationContent} =
    useNavigationBuilder<
      TabNavigationState<ParamListBase>,
      TabRouterOptions,
      TabActionHelpers<ParamListBase>,
      TabNavigationOptions,
      TabNavigationEventMap
    >(TabRouter, {
      children,
      screenOptions,
      initialRouteName,
    });
  console.log('state.routeNames', state.routeNames);

  return (
    <NavigationContent>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={[{width: 80, flexGrow: 0, flexShrink: 0}, tabBarStyle]}>
          {state.routes
            .filter(route => !route.name.startsWith('_'))
            .map((route, index) => (
              <TouchableOpacity
                key={route.key}
                onPress={() => {
                  if (navigation.getState().index === index) {
                    return;
                  }
                  const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                    data: {
                      isAlreadyFocused:
                        route.key === state.routes[state.index].key,
                    },
                  });

                  if (!event.defaultPrevented) {
                    navigation.dispatch({
                      ...CommonActions.navigate({
                        name: route.name,
                        merge: true,
                      }),
                      target: state.key,
                    });
                  }
                }}
                style={{flex: 1}}>
                <View style={{backgroundColor: 'red'}}>
                  <Text>tab-{route.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
        </View>
        <View style={[{flex: 1}, contentStyle]}>
          {state.routes.map((route, i) => {
            return (
              <View
                key={route.key}
                style={[
                  StyleSheet.absoluteFill,
                  {display: i === state.index ? 'flex' : 'none'},
                ]}>
                {descriptors[route.key].render()}
              </View>
            );
          })}
        </View>
      </View>
    </NavigationContent>
  );
}

export default createNavigatorFactory<
  TabNavigationState<ParamListBase>,
  TabNavigationOptions,
  TabNavigationEventMap,
  typeof TabNavigator
>(TabNavigator);
