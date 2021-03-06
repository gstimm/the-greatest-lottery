import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Cart } from '../components/index';
import NewBetScreen from '../screens/NewBet';

const Drawer = createDrawerNavigator();

const DrawerRoute = () => {
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false,
      drawerPosition: 'right',
      overlayColor: 'rgba(255, 255, 255, 0.8)',
    }}
      drawerContent={props => <Cart {...props} />}
    >
      <Drawer.Screen name="NewBetScreen" component={NewBetScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerRoute;
