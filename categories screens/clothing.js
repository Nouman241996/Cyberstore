
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity,Animated, View, Text, ScrollView,TextInput,Button, ImageBackground, Dimensions, Pressable } from 'react-native';

const Clothing = ({ navigation }) => {
   
    return (
             <ScrollView style={{flex:1 , backgroundColor:'#ffffff'}}
        showsVerticalScrollIndicator={false}>
           
           
        </ScrollView>
      
       
    );
  };
export default Clothing;
const styles=StyleSheet.create({
    boxview:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    boxtext:{
        color:'#ffffff',
        fontWeight:'bold',
        fontSize:40,
        textTransform:'capitalize',
    },
    bottomview:{

        flex:1.5,
        backgroundColor:'#ffffff',
        bottom:50,
        
        borderTopStartRadius:60,
        borderTopEndRadius:60,
    },
   types:{
        marginTop:20,
   },

});
