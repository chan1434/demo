import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native';
import Tabs from './(tabs)/_layout';

const Drawer = createDrawerNavigator();

export default function DashboardLayout() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Tabs} />
      <Drawer.Screen name="Settings" component={() => <Text>Settings Page</Text>} />
    </Drawer.Navigator>
  );
}
