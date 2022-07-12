import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContents from './drawerContent';
import SellerTabs from './screens/Stabs';

const Drawer = createDrawerNavigator();
const SellerDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContents {...props} />}>
      <Drawer.Screen name="Feed" drawerPosition="left" component={SellerTabs} />
    </Drawer.Navigator>
  );
};

export default SellerDrawer;
