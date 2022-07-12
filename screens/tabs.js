import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import ProfileBuyer from './ProfileBuyer';
import Cstack from '../navigation/CategoriesStack';
import CartStack from '../navigation/CartStack';
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function PettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pettings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const bottomtabs=({navigation})=> {
       
  return (
      <Tab.Navigator screenOptions={{headerShown:false}}
      tabBarOptions={{
        // showLabel: false,
        // style: {
        //   backgroundColor: 'white',
        //   flexDirection: 'row',
        //    elevation: 0,
        // },


        activeTintColor: '#008b8b',
        inactiveTintColor: 'white',
        showLabel: false,
        keyboardHidesTabBar: true,
        style: {
          borderWidth: 0.5,
          height:55,
          borderBottomWidth: 1,
          backgroundColor:  'white',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          borderColor: 'white',
          position: 'absolute',
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.46,
          shadowRadius: 11.14,
          
          elevation: 17,
        
        },

      }}
      >
        <Tab.Screen
       
        options={{
          tabBarIcon: ({focused}) => (
           
            <View
              style={{
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: focused ? '#008b8b' : '#FFFFFF',
              }}>
              {/* <Image
                source={icons.home_icon}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#FFFFFF' : 'black',
                }}
              /> */}
              <Text
                style={{
                  fontSize: 15,
                  paddingTop: 3,
                  color: focused ?  '#FFFFFF': '#008b8b',
                }}>
                Home
              </Text>
            </View>
          ),
        }}
        name="Homescreen" component={Cstack} />
        <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: focused ? '#008b8b' : '#FFFFFF',
              }}>
              {/* <Image
                source={icons.home_icon}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#FFFFFF' : 'black',
                }}
              /> */}
              <Text
                style={{
                  fontSize: 15,
                  paddingTop: 3,
                  color: focused ? '#FFFFFF' : '#008b8b',
                }}>
               Cart
              </Text>
            </View>
          ),
        }}
        name="CartStack" component={CartStack} />
          <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: focused ? '#008b8b' : '#FFFFFF',
              }}>
              {/* <Image
                source={icons.home_icon}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#FFFFFF' : 'black',
                }}
              /> */}
              <Text
                style={{
                  fontSize: 15,
                  paddingTop: 3,
                  color: focused ? '#FFFFFF' : '#008b8b',
                }}>
               Profile
              </Text>
            </View>
          ),
        }}
        name="ProfileBuyer" component={ProfileBuyer} />
      </Tab.Navigator>
      
   
  );
}
export default bottomtabs;