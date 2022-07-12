
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity,Animated, View, Text, ScrollView,TextInput,Button, ImageBackground, Dimensions, Pressable } from 'react-native';

const ProductMobile = ({ navigation ,route}) => {
  
   
    


    return (
             <ScrollView style={{flex:1 , backgroundColor:'#ffffff'}}
        showsVerticalScrollIndicator={false}>
            
            <ImageBackground source={require('../images/mobileprod.png')}
            style={{
                height:Dimensions.get('window').height/1.8,
            }}>
               
                
            </ImageBackground>
            <View style={styles.bottomview}>
              <View style={{padding:40,marginTop:20}}>
                  <Text style={{color:'#008b8b',fontSize:40}}>
                      {route.params.name}
                  </Text>
                  <Text>----------------------------------------------------------------------------------------</Text>
                
                <Text style={{fontSize:20}}>
                    <Text style={{fontSize:20,color:'green',fontWeight:'bold'}}>
                        PKR {' '}
                    </Text>
                    {route.params.Price}</Text>
                <View style={{marginTop:10}}>
                    < Text style={{fontSize:20}}>{route.params.Description}</Text>
                </View>
                <View style={{paddingVertical:10}}>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'#008b8b'}}>Seller Contact:</Text>
                    <Text style={{color:'red',fontSize:20}}>{route.params.Phone}</Text>
                </View>
                <View style={{marginTop:10,alignItems:'center'}}>
                    <TouchableOpacity>
                        <View style={styles.cartbtn}>
                            <Text style={{color:'#ffffff',fontSize:25}}>add to cart</Text>
                        </View>
                    </TouchableOpacity>
                </View>
               
                 
              
              </View>
            </View>
        </ScrollView>
      
       
    );
  };
export default ProductMobile;
const styles=StyleSheet.create({
    cartbtn:{
        width:300,height:50,backgroundColor:'#008b8b',borderRadius:30,alignItems:'center',justifyContent:'center'
    },
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
    

});