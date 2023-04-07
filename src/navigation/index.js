import FeedScreen from '../screens/FeedScreen';
import CreatPostScreen from '../screens/CreatPostScreen';
import UpdateProfileScreen from '../screens/UpdateProfileScreen';
import ProfileScreen from '../screens/ProfileScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {FontAwesome} from '@expo/vector-icons'; 

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Feed"
          component={FeedScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <FontAwesome
                onPress={() => navigation.navigate("Profile")}
                name="user"
                size={24}
                color="gray"
              />
            ),
          })}
        />
        <Stack.Screen name="Create Post" component={CreatPostScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Update Profile" component={UpdateProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;