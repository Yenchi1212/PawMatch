import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import PetScreen from './PetScreen';
import SwipeScreen from './SwipeScreen';
import SettingsScreen from './SettingsScreen';
import PetProfileScreen from './PetProfileScreen';
import ExploreScreen from './ExploreScreen';
import SavedScreen from './SavedScreen';
import MatchScreen from './MatchScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Matches" component={MatchScreen} />
      <Tab.Screen name="Saved" component={SavedScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
