import React from 'react';
import {NavigationContainer,DefaultTheme} from '@react-navigation/native'
import StackNavigation from './navigation/stack'

const App = () => {
 
  return (
   <NavigationContainer>
     <StackNavigation/>
   </NavigationContainer>
  );
};
export default App;