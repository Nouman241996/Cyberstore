import React, { useState,useEffect } from 'react';
import { StyleSheet, TouchableOpacity,Animated, View, Text, ScrollView,TextInput,Button, ImageBackground, Dimensions, Pressable } from 'react-native';
import { firestore } from '../setup';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
const Mobiles=({navigation,route})=>{
    const [Data,setData]=useState([]);
    const usersCollectionRef = firestore().collection('Shops');
    const query=firestore().collectionGroup('products');
   
    const products=(id)=>{
      navigation.navigate('ShopMobiles',{id:id})
    }
    
    const fetchdata=async()=>{
        const temp=[];
        usersCollectionRef
        .where('Type','==','Mobile')
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
    return(
        <ScrollView style={{flex:1 , backgroundColor:'#ffffff'}}
        showsVerticalScrollIndicator={false}>
        
        <SafeAreaView>
                            
                            {
                                Data && Data.map(data=>{
                                  
                                   return(
                                       <SafeAreaView>
                                         <ScrollView>
                                           <TouchableOpacity onPress={()=>products(data.Shop)}>
                                           <View style={{width:380,height:100,backgroundColor:'#008b8b',margin:10,borderRadius:20,justifyContent:'center',alignItems:'center'}}>
                                               <Text style={styles.shoptext}>{data.Shop}</Text>
                                           </View>
                                           </TouchableOpacity>
                                           </ScrollView>
                                       </SafeAreaView>
                                   ) 
                                        })
                             }
                       
                      
           
                       </SafeAreaView>
           
        </ScrollView>
      
    )
}
export default Mobiles;
const styles=StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
    shoptext:{
        color:'#ffffff',
        fontSize :40,
        fontStyle:'italic',
        fontWeight:'bold'
    },
    shopview:{
        flex:1,
        width:200,
        height:200,
        borderRadius:40,
        backgroundColor:'blue'
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
   types:{
        marginTop:20,
   },

});
