import React,{useState,useEffect} from 'react'
import {View,Text,ScrollView,StyleSheet,TouchableOpacity} from 'react-native'
import { firestore,firebase } from '../setup'

const OrderScreen=()=>{
    const user=firebase.auth().currentUser.email;
    const [shop,setShop]=useState([])
    const Order=firestore().collection('Shipment');
    useEffect(()=>{
        fetchdata();
    },[])
    const fetchdata=()=>{
        let temp=[]
        const snapshot=Order.where('ProducOwnerEmail','==',user).get();
        snapshot.then(querySnapshot=>{
            querySnapshot.forEach((doc)=>{
                const data=doc.data();
                console.log(doc.data());
                temp.push(data);
            })
            setShop(temp);
        })
    }
    return(
        <ScrollView style={{flex:1,backgroundColor:'#ffffff'}}>
        {shop && shop.map((data,i)=>{
            i++;
            return(
                
                <View key={i} style={{alignItems:'center',margin:10}}>
                    <Text style={{fontSize:30,color:'red',fontWeight:'bold'}}>Order  {i}</Text>
                    <View  style={styles.shopview}>
                        <Text style={{fontSize:35,color:'#000000',fontWeight:'bold'}}>{data.name}</Text>
                        <Text style={{fontSize:20}}>contact # {data.number}</Text>
                        <Text  style={{fontSize:15,color:'red'}}>{data.customerEmail}</Text>
                        <Text>----------------------------------------------------------</Text>
                        <Text style={{fontSize:20}}>City : {data.city}</Text>
                        <Text style={{fontSize:20}}>address : {data.address}</Text>
                        <Text style={{fontSize:20}}>postal code : {data.postalcode}</Text>
                        <Text style={{fontSize:20}}>Product ID: {data.Pid }</Text>
                       
                    </View>
                </View>
            )
        })}
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
    </ScrollView>
    )
}
export default OrderScreen;
const styles=StyleSheet.create({
    shopview:{
        backgroundColor:"#ffffff",
        borderColor:'#000000',
        borderWidth:2,
        width:'90%',
        height:300,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    },
    viewprod:{
        width:200,
        height:50,
        backgroundColor:'#008b8b',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    }
})