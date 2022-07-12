
import React,{useState} from 'react';
import { StyleSheet, TouchableOpacity,Image,SafeAreaView, View, Text, ScrollView,TextInput,Button, ImageBackground, Dimensions, Pressable } from 'react-native';
import { Auth } from '../setup';
import { firestore } from '../setup';
import { firebase } from '@react-native-firebase/auth';
import data from '../model/data';
const Home = ({ navigation }) =>  {

  const [user,setUser]=useState('');
  const[checku,setChecku]=useState([]);
  const onAuthStateChanged=user=>{
      setUser(user);
  }
  React.useEffect(()=>{
      const subscriber=Auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber;
  })
    const onstart=()=>{
      if(user ){
        const temp=[];
      //console.log(firebase.auth().currentUser.email);
      const userCollection= firestore().collection("Users")
      userCollection.where('Email','==',firebase.auth().currentUser.email).get().then(querySnapshot =>{
        querySnapshot.forEach(doc=>{
         
        const data=doc.data();
         temp.push(data);
         console.log(doc.id,'=>',doc.data())
        });
        setChecku(temp);
    });;
    checku.map(data=>{
      if(data.Type=='Buyer'){
       navigation.navigate('Drawer');
       console.log(data.Email);
      }
      else if(data.Type=='Seller'){
        navigation.navigate('Sdrawer');
        console.log(data.Email);
      }
    })
  
      }
      else{
        navigation.navigate('Stackauth');
      }
    }
  return (
   
     
    <SafeAreaView style={{flex:1 ,alignItems:'center',justifyContent:'center',backgroundColor:'#ffffff'}}>
      <View >
        <Text style={{fontSize:30,color:'#008b8b',fontWeight:'bold',marginBottom:50}}>CYBERSHOP</Text>
      </View>
      <Image  source={require('../images/splash.png')} style={{width: 300, height: 300,transform:[{rotate:'-15deg'}]}} />
      <TouchableOpacity style={styles.letsgo} onPress={()=>onstart()} >
        <Text style={{color:'#ffffff',fontWeight:'bold',fontSize:20,fontFamily:'Bodoni 72 Oldstyle'}}>Let's Begin</Text>
      </TouchableOpacity>
    </SafeAreaView>
  
   

    
  );
}
  
export default Home;
const styles=StyleSheet.create({
 
  letsgo:{
    backgroundColor:'#008b8b',
    padding:20,
    width:'90%',
    
    alignItems:'center',
    borderRadius:10
  }
});