import React from 'react';
import {} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SellerShop from '../categories screens/SellerShops';
const Stack = createStackNavigator();
import SHome from '../screens/SHome';
import ProductsSeller from '../categories screens/ProductsSeller';
import OrderScreen from '../screens/OrderScreen';
const SellerHomeStack=()=>{
    return(
<Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Shome" component={SHome} />
      <Stack.Screen name="SellerShop" component={SellerShop} />
      <Stack.Screen name="ProductsSeller" component={ProductsSeller} />
      <Stack.Screen name="OrderScreen" component={OrderScreen} />
    </Stack.Navigator>
    )
}
export default  SellerHomeStack;