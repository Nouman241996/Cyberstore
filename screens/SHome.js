import React,{useEffect,useState} from 'react'
import Carasoul from '../component/CarouselCards';
import {StyleSheet,TouchableOpacity,SafeAreaView,Title,Header, View,Image,Body, Text, ScrollView,TextInput,Button, ImageBackground, Dimensions, Pressable } from 'react-native'
import { firebase,firestore } from '../setup';
const SHome=({navigation})=>{
    const [size,setSize]=useState(null)
    const [psize,setPsize]=useState(null)
    const [prod,setProd]=useState([])
    let Size=null;
    let Psize=null;
    const ShopSize=firestore().collection('Shops');
    const  Orders=firestore().collection('Shipment');
    const user=firebase.auth().currentUser.email;
    const fethcdata=async()=>{
        let temp=[]
        const Osnapshot=Orders.where('ProducOwnerEmail','==',user).get()
        const snapshot=ShopSize.where('userEmail','==',user).get()
        Size=(await snapshot).size;
        Psize=(await Osnapshot).size;
        console.log(Psize)
        setPsize(Psize)
        console.log(Size)
        setSize(Size);
        snapshot.then(querySnapshot=>{
            querySnapshot.forEach((doc)=>{
                const data=doc.data();
                console.log(doc.data());
                temp.push(data);
            })
            setProd(temp);
        })
      
    }
    


    useEffect(()=>{
        fethcdata();
    },[])
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}} >
         
        <ScrollView  >
        
          <View style={{justifyContent:'center',marginBottom:30,flexDirection:'row'}}>

            <Text style={{color:'#008b8b',fontSize:20,marginLeft:10}}>CYBERSHOP</Text>
           
            
          </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20,paddingHorizontal:20}}>
              <Text style={{fontSize:25,color:'#000000'}}>Hi ,{firebase.auth().currentUser.email}</Text>
              <ImageBackground  source={require('../images/userimg.jpg')} 
              style={{width:35,height:35}}
              imageStyle={{borderRadius:10}}
              />
            </View>

            <View >
            <Carasoul/>
            </View>
            <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
                <TouchableOpacity style={{margin:5}} onPress={()=>navigation.navigate('SellerShop')}>
                    <View style={styles.boxview}>
                        <Text style={{fontSize:30,fontWeight:'bold',paddingHorizontal:0}}> Total Shops</Text>
                        <Text style={{color:'red',fontSize:50}}>{size}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('OrderScreen')} style={{margin:5}}>
                        <View style={styles.boxview2}>
                        <Text style={{fontSize:30,fontWeight:'bold',paddingHorizontal:2}}>Total Orders</Text>
                            <Text style={{color:'red',fontSize:50}}>{psize}</Text>
                        </View>
                </TouchableOpacity>
                
            </View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
        </ScrollView>
    </SafeAreaView>
    )
}
export default SHome;
const styles=StyleSheet.create({
    boxview:{
        height:150,
        justifyContent:'center',
        alignItems:'center',
        width:150,
        backgroundColor:'#ffffff',
        borderColor:'#000000',
        borderWidth:2,
        marginLeft:20,
        borderRadius:20
    },
    boxview2:{
        height:150,
        width:150,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffffff',
        borderColor:'#000000',
        borderWidth:2,
        marginRight:20,
        borderRadius:20
    }
})