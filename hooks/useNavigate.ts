import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

export type StackList = {
  Me: {name?: string};
  About: {name?: number};
  _About: undefined;
  Home: undefined;
  Worker: undefined;
};

export function useNavigate() {
  const navigation = useNavigation<NavigationProp<StackList>>();
  return navigation.navigate;
}

export function useAppRoute() {
  const route = useRoute<RouteProp<StackList>>();
  return route;
}
