import React from 'react';
import {} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Splashscreen from '../screens/splashscreen';
import Start from '../screens/startingscreen';
import Pract from '../pract';
import Drawer from '../drawer';
import Astack from './AuthStack';
import Sdrawer from '../Sellerdrawer';
const Stack = createStackNavigator();
const Stacknavigation=()=>{
    return(
<Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Splashscreen" component={ Splashscreen}/>
      <Stack.Screen name="Startscreen" component={ Start}/>
      <Stack.Screen name="Stackauth" component={Astack}/>
      <Stack.Screen name="Drawer" component={Drawer}/>
      <Stack.Screen name="Sdrawer" component={Sdrawer}/>
       
       
    </Stack.Navigator>
    )
}
export default Stacknavigation;