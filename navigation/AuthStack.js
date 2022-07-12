import React from 'react';
import {} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Mstack from './stack';
import Loginscreen from '../screens/login';
import Forgotpassword from '../screens/forgotpassword';
import Register from '../screens/Register';
import Buyerscreen from '../component/BuyerFormReg';
import Sellerscreen from '../component/SellerFormReg';
import ScreenLbuyer from '../component/BuyerLogin';
import Screenseller from '../component/SellerLogin';
const Stack = createStackNavigator();
const AuthStackNavigation=()=>{
    return(
<Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Login" component={Loginscreen} />
      <Stack.Screen name="Forgotscreen" component={Forgotpassword} />
      <Stack.Screen name="Register" component={Register}  />
      <Stack.Screen name="Mainstack" component={Mstack}  />
      <Stack.Screen name="Buyerreg" component={ Buyerscreen}  />
      <Stack.Screen name="Sellerref" component={Sellerscreen}  />
      <Stack.Screen name="screenbuyerlogin" component={ScreenLbuyer}  />
      <Stack.Screen name="screensellerlogin" component={Screenseller}  />
 
       
    </Stack.Navigator>
    )
}
export default AuthStackNavigation;