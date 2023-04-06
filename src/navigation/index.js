import FeedScreen from '../screens/FeedScreen';
import CreatPostScreen from '../screens/CreatPostScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Feed" component={FeedScreen} />
          <Stack.Screen name="Create Post" component={CreatPostScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Navigator;