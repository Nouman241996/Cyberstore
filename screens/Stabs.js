import * as React from 'react';
import { Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SAddProducts from './AddProducts';
import ProfileBuyer from './ProfileBuyer';
import SellerHomeStack from '../navigation/SellerHomeStack';


const Tab = createBottomTabNavigator();
const Sbottomtabs=({navigation})=> {
       
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
        name="SHome" component={SellerHomeStack} />
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
               Shop
              </Text>
            </View>
          ),
        }}
        name="Add_Products" component={SAddProducts} />
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
export default Sbottomtabs;