import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import Tabs from './screens/Tabs';
import PetProfileScreen from './screens/PetProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* Login Flow */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="Signup" 
          component={SignupScreen}
          options={{ headerShown: false }}
        />

        {/* Main Tabs */}
        <Stack.Screen 
          name="Tabs" 
          component={Tabs}
          options={{ headerShown: false }}
        />

        {/* Pet Profile */}
        <Stack.Screen 
          name="PetProfile"
          component={PetProfileScreen}
          options={{ title: "Pet Profile" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
