import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './features/home';
import { StatusBar } from 'react-native';
import CommentScreen from './features/comment';
import { PostProps } from './components/Post';

export type RouteList = {
  home: undefined;
  comment: { post: PostProps };
};

const Stack = createNativeStackNavigator<RouteList>();

export default function App() {
  return (
    <NavigationContainer >
      <StatusBar translucent />
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="home">
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="comment" component={CommentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}