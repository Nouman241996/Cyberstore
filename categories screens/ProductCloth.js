
import { transform } from '@babel/core';
import React, { useState,useEffect } from 'react';
import { StyleSheet, TouchableOpacity,Animated,Modal,Image, View, Text, ScrollView,TextInput,Button, ImageBackground, Dimensions } from 'react-native';
import { TOUCHABLE_STATE } from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';

import { firestore ,firebase} from '../setup';

const ModelPooup=({visible,children})=>{
    const[showModal,setShowModal]=useState(visible);
    const scaleValue=React.useRef(new Animated.Value(0)).current;
    useEffect(()=>{
        toggleModal();
    },[visible]);
    const toggleModal=()=>{
        if(visible){
            setShowModal(true);
            Animated.spring(scaleValue,{
                toValue:1,
                duration:300,
                useNativeDriver:true,

            }).start();
        }else{
            setTimeout(()=>setShowModal(false),200);
            Animated.timing(scaleValue,{
                toValue:0,
                duration: 300,
                useNativeDriver:true
            }).start();
            
        }
    }
    return (
      <Modal transparent visible={showModal}>
          <View style={styles.modalBackground}>
                <Animated.View style={[styles.modalcontainer,{transform:[{scale:scaleValue}]}]}>
                    {children}
                </Animated.View>
          </View>
      </Modal>
    );
   
}

const ProductCloth = ({ navigation ,route}) => {
const cartRef=firestore().collection('Cart');
const[visible,setVisible]=useState(false);

const additem=(name,Price,Description,Pid,Email)=>{
    cartRef.doc(Pid).set({
        userEmail:firebase.auth().currentUser.email,
        OwnerEmail:Email,
        Name:name,
        Price:Price,
        Pid:Pid,
        Description:Description,
    }).then(()=>{
        console.log('item added');
    });
    setVisible(true);
   
}
    return (
             <ScrollView style={{flex:1 , backgroundColor:'#ffffff'}}
        showsVerticalScrollIndicator={false}>
             <View style={{borderColor:'#F5F5F5',borderWidth:1,marginTop:20}}></View>
                <View style={{marginTop:5,marginHorizontal:10}}>
                    <Text style={{fontSize:15,color:'#808080'}}>Shops   /   Products   /   product</Text>
                </View>  
                <View style={{borderColor:'#F5F5F5',borderWidth:1,marginTop:10,marginBottom:10}}></View>
            
            <ImageBackground source={require('../images/clothprod.jpg')}
            style={{
                height:Dimensions.get('window').height/1.8,
            }}>
               
                
            </ImageBackground>
            <View style={styles.bottomview}>
              <View style={{padding:40,marginTop:20}}>
                  <Text style={{color:'#008b8b',fontSize:40}}>
                      {route.params.name}
                  </Text>
                  <Text style={{color:'#000000',fontSize:20}}>
                    PID {route.params.Pid}
                  </Text>
                  <Text>-------------------------------------------------------------------------------------</Text>
                
                <Text style={{fontSize:20}}>
                    <Text style={{fontSize:20,color:'green',fontWeight:'bold'}}>
                        PKR {' '}
                    </Text>
                    {route.params.Price}</Text>
                <View style={{marginTop:10}}>
                    <Text style={{fontSize:20,color:'#000000'}}>About: {route.params.Description}</Text>
                </View>
                <View style={{paddingVertical:10}}>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'#008b8b'}}>Seller Contact:</Text>
                    <Text style={{color:'red',fontSize:20}}>{route.params.Phone}</Text>
                </View>

                    <ModelPooup visible={visible}>
                        <View style={{alignItems:"center"}}>
                            <View style={styles.header}>
                                <TouchableOpacity onPress={()=>setVisible(false)}>
                                    <Image source={require('../images/cross.jpg')}
                                        style={{height:30,width:30}}
                                    />
                                </TouchableOpacity>
                                
                            </View>
                        </View>
                        <View style={{alignItems:'center'}}>
                        <Image source={require('../images/successicon.png')}
                            style={{height:150,width:150,marginVertical:10}}
                                 />
                        </View>
                      
                        <Text style={{marginVertical:30,fontSize:20,textAlign:'center'}}>Congratulations item is added to the cart</Text>
                    </ModelPooup>
                    
                <View style={{marginTop:10,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>additem(route.params.name,route.params.Price,route.params.Description,route.params.Pid,route.params.Email)}>
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
export default ProductCloth;
const styles=StyleSheet.create({
    cartbtn:{
        width:300,height:50,backgroundColor:'#008b8b',borderRadius:10,alignItems:'center',justifyContent:'center'
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
    modalBackground:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0.5)',
        justifyContent:'center',
        alignItems:'center'
    },
    modalcontainer:{
        width:'80%',
        backgroundColor:'#ffffff',
        paddingHorizontal:20,
        paddingVertical:30,
        borderRadius:20,
        elevation:20
    },
    header:{
        width:'100%',
        height:40,
        alignItems:'flex-end',
        justifyContent:'center'
    }

});