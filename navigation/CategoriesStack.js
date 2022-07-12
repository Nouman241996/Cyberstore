import React from 'react';
import {} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Cloth from '../categories screens/clothing';
import Home from '../screens/Home';
import Mobile from '../categories screens/mobiles';
import Garments from '../categories screens/garments';
import ShopProducts from '../categories screens/ShopProducts';
import ShopMobiles from '../categories screens/ShopMobiles';
import ProductCloth from '../categories screens/ProductCloth';
import ProductMobile from '../categories screens/ProductMobile';
import Map from '../component/map';
const Stack = createStackNavigator();
const Stacknavigation=()=>{
    return(
<Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Homescreen" component={Home}/>
      <Stack.Screen name="Clothingscreen" component={Cloth}/>
      <Stack.Screen name="Garmentsscreen" component={Garments}/>
      <Stack.Screen name="Mobiles" component={Mobile}/>
      <Stack.Screen name="ShopProducts" component={ShopProducts}/>
      <Stack.Screen name="ShopMobiles" component={ShopMobiles}/>
      <Stack.Screen name="ProductCloth" component={ProductCloth}/>
      <Stack.Screen name="ProductMobile" component={ProductMobile}/>
      <Stack.Screen name="Map" component={Map}/>
     
    </Stack.Navigator>
    )
}
export default Stacknavigation;