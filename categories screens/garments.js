
import React, { useState,useEffect } from 'react';
import { StyleSheet, TouchableOpacity,Animated, View, Text, ScrollView,TextInput,Button, ImageBackground, Dimensions, Pressable } from 'react-native';
import { firestore } from '../setup';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const Garments = ({ navigation ,route}) => {

    const [Data,setData]=useState([]);
    const usersCollectionRef = firestore().collection('Shops');
    const query=firestore().collectionGroup('products');
   
    const products=(id)=>{
      navigation.navigate('ShopProducts',{id:id,Type:route.params.Type})
    }
    
    const fetchdata=async()=>{
        const temp=[];
        usersCollectionRef
        .where('Type','==',route.params.Type)
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
    return (
            <ScrollView style={{flex:1,backgroundColor:'#ffffff'}}>
              <View style={{borderColor:'#F5F5F5',borderWidth:1,marginTop:20}}></View>
                <View style={{marginTop:5,marginHorizontal:10}}>
                    <Text style={{fontSize:15,color:'#808080'}}>Shops   / </Text>
                </View>  
                <View style={{borderColor:'#F5F5F5',borderWidth:1,marginTop:10,marginBottom:10}}></View>
                 {
                     Data && Data.map((data,i)=>{
                       i++
                       console.log(data.latitude)
                        return(
                            
                              <ScrollView key={i}>
                                <View style={{alignItems:'center'}}>
                                  
                                  <View style={{width:340,height:150,backgroundColor:'#008b8b',margin:10,borderRadius:20,justifyContent:'center',alignItems:'center'}}>
                                      <Text style={styles.shoptext}>{data.Shop}</Text>
                                      <View  style={{flexDirection:'row',justifyContent:'space-around'}}>
                                          <TouchableOpacity  style={{marginHorizontal:10}} onPress={()=>navigation.navigate('Map',{lon:data.Longitude,lat:data.Latitude,Shop:data.Shop})}>
                                          <View style={{width:150,height:30,borderRadius:10,backgroundColor:'#ffffff',justifyContent:'center',alignItems:'center'}}>
                                            <Text>view on maps</Text>
                                          </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={()=>products(data.Shop)}>
                                          <View style={{width:150,height:30,borderRadius:10,backgroundColor:'#ffffff',justifyContent:'center',alignItems:'center'}}>
                                            <Text>view products</Text>
                                          </View>
                                        </TouchableOpacity>
                                       
                                      
                                      </View>
                                   
                                  </View>
                               
                                </View>
                               
                                </ScrollView>
                          
                        ) 
                             })
                  }
            
           
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
            </ScrollView>

      
       
    );
  };
export default Garments;
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
        height:250,
        borderRadius:40,
        backgroundColor:'blue'
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
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
