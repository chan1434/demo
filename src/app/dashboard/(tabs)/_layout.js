import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './profile';
import AccountSettings from './accountsettings';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Account Settings" component={AccountSettings} />
    </Tab.Navigator>
  );
}
