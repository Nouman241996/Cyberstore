
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity,Animated, View, Text, ScrollView,TextInput,Button, ImageBackground, Dimensions, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Auth } from '../setup';
import AnimatedInput from "react-native-animated-input";
import { SignInUser, forgotPassword} from './ApiService';
import { firestore } from '../setup';
const SellerLogin = () => {
    const userCollection=firestore().collection('Users');
    const [Pass, setPass] = useState('');
    const [userName, setUsername] = useState('');
    const [user,setUser]=useState('');
    const[checku,setChecku]=useState([]);
    const navigation=useNavigation();
    const onAuthStateChanged=user=>{
        setUser(user);
    }
    React.useEffect(()=>{
        const subscriber=Auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    })
    const onForgot=(email)=>{
        forgotPassword(email).then(data=>{
            alert(data);
        }).catch(error=>{
            alert(error);
        });
    }
    const onSignInPressed=(userName,Pass)=>{
        var name=userName,pass=Pass;
        var nameL = name.length ;
        var passL = pass.length;
      
        
        if(name=='' && pass==''){
           alert('Fields are empty')
        }
        else if(name==''){
           alert('username is empty')
        }
        else if(pass==''){
           alert('please enter password')
        }
        else if(nameL>=25){
            alert("username should be 8 characters or less")
        }
        else if(passL<6|| passL >20){
            alert("password should be between 8 and 20 characters")
        }
        else {
            SignInUser(name,pass).then(data=>{
                alert(data);
            }).catch(error=>{
                alert(error);
            });
            const temp=[];
            userCollection
            .where('Type','==','Seller')
            .get()
            
            .then(querySnapshot =>{
                querySnapshot.forEach(doc=>{
                 
                 const data=doc.data();
                 temp.push(data);
                 console.log(doc.id,'=>',doc.data())
                });
                setChecku(temp);
            });
           if(user){
            checku.map(data=>{
                if(data.Email==name || data.Password==pass){
                    navigation.navigate('Mainstack', { screen: 'Sdrawer' });
                }
              
               
            })
           }
            
        }
        
          
}
       return(
           <View>
                  <View style={{marginTop:20}}>
                      <Text style={{color:'red', fontSize:15}}>Login as a Seller</Text>
                    
          
                      <TextInput style={styles.input}
                     placeholder="email"
                     onChangeText={newText=> setUsername(newText)}
                    value={userName}
                     placeholderTextColor='#000000'
                />

                <TextInput style={styles.input}
                     placeholder="password"
                     secureTextEntry={true}
                     onChangeText={newText=> setPass(newText)}
                     value={Pass}
                     placeholderTextColor='#000000'
                />
           
                  
                
                </View>
                <View style={styles.forgotpassview} >
                    <TouchableOpacity onPress={()=>onForgot(userName)}><Text style={{fontSize:15}}>forget password?</Text></TouchableOpacity>
                </View>
                <View style={styles.Button}>
                  <TouchableOpacity onPress={()=>onSignInPressed(userName,Pass)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Sign in</Text>
                    </View>
                  </TouchableOpacity>
                  </View>
                  <View style={{marginTop:10}}> 
                  <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                    <View style={styles.signupbutton}>
                        <Text style={styles.signupbuttonText}>Sign up</Text>
                    </View>
                  </TouchableOpacity>
                  </View>
           </View>
      
    );
  };
export default SellerLogin;
const styles=StyleSheet.create({
    input: {
        margin: 5,
        height: 45,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius:5,
        paddingLeft:10
     },
     forgotpassview:{
        flexDirection:'row',
        flex:1,
        justifyContent:'flex-end',
        marginTop:5
     },
     Button:{
        marginTop:20
    },
    button: {
       borderRadius: 8,
       paddingVertical: 14,
       paddingHorizontal: 10,
       shadowColor:'#f0ffff',
       backgroundColor: '#008b8b',
   },
   signupbutton:{
       borderRadius: 8,
       paddingVertical: 14,
       paddingHorizontal: 10,
       borderWidth:2,
       borderColor:'#008b8b',
       backgroundColor: '#ffffff',
   },
   buttonText: {
       color: '#ffffff',
       fontWeight: 'bold',
       textTransform: 'uppercase',
       fontSize: 16,
     
       textAlign: 'center',
   },
   signupbuttonText: {
       color: '#008b8b',
       fontWeight: 'bold',
       textTransform: 'uppercase',
       fontSize: 16,
       textAlign: 'center',
   },

});