

import  React,{useState,useEffect} from 'react';
import { StyleSheet,TouchableOpacity,SafeAreaView,Title,Header, View,Image,Body, Text, ScrollView,TextInput,Button, ImageBackground, Dimensions, Pressable } from 'react-native';

import { SignOut } from '../component/ApiService';

import Carasoul from '../component/CarouselCards';
import {firebase} from '../setup';
import { firestore } from '../setup';


const Home = ({navigation}) =>  {
  const usersCollectionRef = firestore().collection('Shops');
  const [Data,setData]=useState([]);
  const user = firebase.auth().currentUser;

 

useEffect(() => {
  fetchdata();
}, [])
const fetchdata=()=>{
  usersCollectionRef
  .get()
  .then(documentSnapshot =>{
      documentSnapshot.forEach(documentSnapshot=>{
         console.log(documentSnapshot.data());
         setData([...Data,documentSnapshot.data()])
          console.log(setData);
      });
  });
};
   return (
   
     
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}} >
         
        <ScrollView  >
        
          <View style={{justifyContent:'center',marginBottom:30,flexDirection:'row'}}>

            <Text style={{color:'#008b8b',fontSize:20,marginLeft:10}}>CYBERSHOP</Text>
           
            
          </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20,paddingHorizontal:20}}>
              <Text style={{fontSize:20}}>Hi <Text style={{fontSize:15,color:'red',fontWeight:'bold'}}>{user.email}</Text></Text>
              <ImageBackground  source={require('../images/userimg.jpg')} 
              style={{width:35,height:35}}
              imageStyle={{borderRadius:10}}
              />
            </View>
            
            <View style={{ paddingHorizontal:20}}>
              <View style={{paddingHorizontal:5,
                flexDirection:'row',
                paddingVertical:4,
               
                borderWidth:1,
                borderRadius:10,
                borderColor:'#C6C6C6'}}>
                <TextInput placeholder='Search'/>
              </View>
            </View>
           
            <View >
            <Carasoul/>
            </View>
             
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,paddingHorizontal:20}}>
              <Text style={{fontSize:30,fontWeight:'bold'}}>Categories</Text>
              <TouchableOpacity onPress={()=>{}}>
              <Text style={{color:'#0aada8',fontSize:20}}>see all</Text>
              </TouchableOpacity>
            
            </View>
            <View style={{marginTop:20,alignItems:'center'}}>
            <View style={{flexDirection:'row',padding:5}}>
                <TouchableOpacity onPress={()=>navigation.navigate("Garmentsscreen",{Type:'clothing'})}>
                    <ImageBackground  source={require('../images/cloth.jpg')} 
                    style={{width:180,height:200}}
                    imageStyle={{borderRadius:90}}
                    />
                    <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:15,fontWeight:'bold'}}> Clothing</Text>
                    </View>
               
                </TouchableOpacity >
                <TouchableOpacity style={{marginLeft:3}} onPress={()=>navigation.navigate("Garmentsscreen",{Type:'Mobile'})}>
                    <ImageBackground  source={require('../images/electronics.jpg')} 
                    style={{width:180,height:200}}
                    imageStyle={{borderRadius:90}}
                    />
                    <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:15,fontWeight:'bold'}}> Mobiles</Text>
                    </View>
               
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',padding:5}}>
                <TouchableOpacity onPress={()=>navigation.navigate("Garmentsscreen",{Type:'Laptop'})}>
                    <ImageBackground  source={require('../images/laptops.jpg')} 
                    style={{width:180,height:200}}
                    imageStyle={{borderRadius:90}}
                    />
                    <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:15,fontWeight:'bold'}}>Laptops & tablets</Text>
                    </View>
               
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:3}} onPress={()=>navigation.navigate("Garmentsscreen",{Type:'Cars'})}>
                    <ImageBackground  source={require('../images/cars.jpg')} 
                    style={{width:180,height:200}}
                    imageStyle={{borderRadius:90}}
                    />
                    <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:15,fontWeight:'bold'}}>vehicles</Text>
                    </View>
               
                </TouchableOpacity>
            </View>
           
            </View>
           
         <Text></Text>
         <Text></Text>
         <Text></Text>
            
        </ScrollView>
    </SafeAreaView>
  
   

    
  );
}
  
export default Home;
const styles=StyleSheet.create({
 categories:{
    marginTop:10,
    flexDirection:'row',
 },
 catlist:{
   padding:15,
 }

});