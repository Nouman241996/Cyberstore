import React, { useState,useEffect } from 'react';
import { StyleSheet, TouchableOpacity,Animated, View, Text, ScrollView,TextInput,Button, Image, Dimensions, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { firestore } from '../setup';
const ShopMobiles=({route,navigation})=>{
    const[Data,setData]=useState([]);
    const usersCollectionprod =firestore().collection('Shops').doc(route.params.id).collection('products');
  
    const fetchdata=async()=>{
        const temp=[];
        usersCollectionprod
        .where('Type', '==', 'Mobile')
       .get()
       .then(querySnapshot =>{
        querySnapshot.forEach((doc)=>{
          const data=doc.data();
           temp.push(data);
           console.log(doc.id,'=>',doc.data())
        });
        setData(temp);
       

    });
    };
    useEffect(() => {
        fetchdata();
      }, [])
      const gotoproduct=(name,Type,Price,Phone,Description,Date_added,Pid,i)=>{
        navigation.navigate('ProductMobile',{name:name,Type:Type,Price:Price,Phone:Phone,Description:Description,Date_added:Date_added,pid:Pid,i:i});
      }
    return(
        <ScrollView style={{flex:1 , backgroundColor:'#ffffff'}}
        showsVerticalScrollIndicator={false}>
                 { Data && Data.map((data,i)=>{
                        return(
                            <SafeAreaView key={i} style={{flex:1,backgroundColor:"#fff"}}>
                            
                              <TouchableOpacity onPress={()=>gotoproduct(data.name,data.Type,data.Price,data.Phone,data.Description,data.Date_added,i)}>
                              <View style={styles.prodview}>
                                 <Image
                                    source={require('../images/mobileprod.png')}
                                    style={{height:130,width:130,borderRadius:100,marginVertical:5,marginHorizontal:10}}
                                 />
                                <View style={styles.infoview}> 
                                    <Text style={{fontSize:20,color:'#000000',fontWeight:'bold'}}>{data.name}</Text>
                                    <Text style={{fontSize:18}}><Text style={{color:'green',fontSize:20}}>PKR{' '}</Text>{data.Price}</Text>
                                </View>
                                
                              </View>
                              </TouchableOpacity>
                             
                          </SafeAreaView>
                           ) 
                      
                 })}
        </ScrollView>
      
    )
}
export default ShopMobiles;
const styles=StyleSheet.create({
    infoview:{
        justifyContent:'center'
    },
     prodview:{
         width:390,
         height:150,
         backgroundColor:'#ffffff',
         borderColor:'#008b8b',
         borderWidth:2,
         margin:10,borderRadius:20,
         flexDirection:'row'
        
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
