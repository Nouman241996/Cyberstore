import React, { useState,useEffect } from 'react';
import { StyleSheet, TouchableOpacity,Animated, View, Text,FlatList ,ScrollView,TextInput,Button, Image, Dimensions, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { firestore } from '../setup';
const ShopProducts=({route,navigation})=>{
    const[Data,setData]=useState([]);
    const usersCollectionprod =firestore().collection('Shops').doc(route.params.id).collection('products');
  
    const fetchdata=async()=>{
        const temp=[];
        usersCollectionprod
        .where('Type', '==', route.params.Type)
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
      const gotoproduct=(name,Type,Price,Phone,Description,Date_added,Pid,Email)=>{
        console.log(Pid)
        navigation.navigate('ProductCloth',{name:name,Type:Type,Price:Price,Phone:Phone,Description:Description,Date_added:Date_added,Pid:Pid,Email:Email});
      }
      const Item = ({ Price, Description }) => (
        <View>
          <Text >{Price} </Text>
          <Text>{Description} </Text>
        </View>
      );
      
      const renderItem = ({ item }) => (
        <Item title={item.Price} description={item.description} />
      );
    return(
        <ScrollView style={{flex:1 , backgroundColor:'#ffffff'}}>
            <View style={{borderColor:'#F5F5F5',borderWidth:1,marginTop:20}}></View>
                <View style={{marginTop:5,marginHorizontal:10}}>
                    <Text style={{fontSize:15,color:'#808080'}}>Shops   /   Products</Text>
                </View>  
                <View style={{borderColor:'#F5F5F5',borderWidth:1,marginTop:10,marginBottom:10}}></View>
      
        <View >
                 { Data && Data.map((data,i)=>{
                       i++
                       return(
                        <SafeAreaView key={i} style={{flex:1,backgroundColor:"#fff",alignItems:'center',justifyContent:'center'}}>
                        
                          <TouchableOpacity onPress={()=>gotoproduct(data.name,data.Type,data.Price,data.Phone,data.Description,data.Date_added,data.Pid,data.userEmail)}>
                          <View style={styles.prodview}>
                             <Image
                                source={require('../images/clothprod.jpg')}
                                style={{height:130,width:120,borderRadius:100,marginVertical:5,marginHorizontal:10}}
                             />
                            <View style={styles.infoview}> 
                                <Text style={{fontSize:20,color:'#000000',fontWeight:'bold'}}>{data.name}</Text>
                                <Text style={{fontSize:18}}><Text style={{color:'green',fontSize:20}}>PKR{' '}</Text>{data.Price}</Text>
                            </View>
                            
                          </View>
                          </TouchableOpacity>
                         
                      </SafeAreaView>
                       ) 
                            })
                 }
        </View>
        </ScrollView>
    )
}
export default ShopProducts;
const styles=StyleSheet.create({
   
   infoview:{
       justifyContent:'center'
   },
    prodview:{
        width:340,
        height:150,
        backgroundColor:'#ffffff',
        borderColor:'#000000',
        borderWidth:2,
        margin:10,borderRadius:8,
        flexDirection:'row'
       
    },
   

});
