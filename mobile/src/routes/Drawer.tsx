import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Cart } from '../components/index';
import NewBetScreen from '../screens/NewBet';

const Drawer = createDrawerNavigator();

const DrawerRoute = () => {
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false,
      drawerPosition: 'right',
    }}
      drawerContent={props => <Cart {...props} />}
    >
      <Drawer.Screen name="NewBetScreen" component={NewBetScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerRoute;
