import React,{useState,useEffect} from 'react'
import {View,Text,ScrollView,Image,TouchableOpacity} from 'react-native'
import { SignOut } from '../component/ApiService';
import { firestore,firebase } from '../setup'
const ProfileBuyer=({navigation})=>{
    const[data,setData]=useState([]);
    const userRef=firestore().collection('Users');
    const signout=()=>{
        SignOut().then(data=>{
          alert(data);
      }).catch(error=>{
          alert(error);
      });
      navigation.navigate('Stackauth', { screen: 'Login' })
  }
   const fetchdata=async()=>{
    const temp=[];
    userRef
    .where('Email','==',firebase.auth().currentUser.email)
   .get()
   .then(querySnapshot=>{
    querySnapshot.forEach((doc)=>{
      const data=doc.data();
       temp.push(data);
       console.log(doc.data())
    });
    setData(temp);

}).catch((error)=>{
    console.log(error)
})
};
useEffect(()=>{
    fetchdata();
},[]);
    return(
        <ScrollView style={{flex:1,backgroundColor:'#ffffff'}}>
                <View style={{alignItems:'center',margin:20}}>
                    <Image
                        source={require('../images/userimg.jpg')}
                        style={{width:300,height:300}}
                    />
                </View>
                <View style={{alignItems:'flex-start',margin:20}}>
                    <Text style={{fontSize:25,fontWeight:'bold'}}>Email</Text>
                    <Text style={{color:'red',fontSize:20}}>{firebase.auth().currentUser.email}</Text>
                </View>
                <View style={{alignItems:'flex-start',marginLeft:20}}>
                <Text style={{fontSize:25,fontWeight:'bold'}}>User type</Text>
                    {data && data.map((data,i=0)=>{
                        i++;
                        return(
                            <Text key={i} style={{color:'red',fontSize:20}}>{data.Type}</Text>
                        )
                    })}
                 </View>
                 <View style={{alignItems:'center',marginTop:10}}>
                    <TouchableOpacity onPress={()=>signout()}>
                        <View style={{height:50,width:300,backgroundColor:'red',borderRadius:15,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:"#ffffff",fontSize:20,fontWeight:'bold'}}>SIGN OUT</Text>
                        </View>
                    </TouchableOpacity>
                    
                 </View>
                 
        </ScrollView>
    )
}
export default ProfileBuyer