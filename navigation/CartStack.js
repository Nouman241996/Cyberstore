import React from 'react';
import {} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../screens/Cart';
import Shipment from '../screens/Shipment';
const Stack = createStackNavigator();
const CartStacknavigation=()=>{
    return(
<Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        
      <Stack.Screen name="Cart" component={Cart}/>
      <Stack.Screen name="Shipment" component={Shipment}/>
      
     
    </Stack.Navigator>
    )
}
export default CartStacknavigation;