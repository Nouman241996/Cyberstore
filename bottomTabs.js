import React from 'react';
import { Text, View, Image, } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './home';
import Homie from './homie';
const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (
      <Tab.Navigator
      tabBarOptions={{
        // showLabel: false,
        // style: {
        //   backgroundColor: 'white',
        //   flexDirection: 'row',
        //    elevation: 0,
        // },


        activeTintColor: 'red',
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
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  height: '100%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: focused ? 'orange' : '#FFFFFF',
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
                    fontSize: 11,
                    paddingTop: 3,
                    color: focused ?  '#FFFFFF': 'black',
                  }}>
                  Home
                </Text>
              </View>
            ),
          }}
        />
         <Tab.Screen
          name="Homie"
          component={Homie}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  height: '100%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: focused ? 'orange' : '#FFFFFF',
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
                    fontSize: 11,
                    paddingTop: 3,
                    color: focused ? '#FFFFFF' : 'black',
                  }}>
                  Homie
                </Text>
              </View>
            ),
          }}
        />
         <Tab.Screen
          name="Homies"
          component={Homie}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  height: '100%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: focused ? 'orange' : '#FFFFFF',
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
                    fontSize: 11,
                    paddingTop: 3,
                    color: focused ? '#FFFFFF' : 'black',
                  }}>
                 Homies
                </Text>
              </View>
            ),
          }}
        />
     
      </Tab.Navigator>
    );
}
export default Tabs;