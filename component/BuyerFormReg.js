import React, { useState} from 'react';
import { StyleSheet, TouchableOpacity,TextInput, View,Text,ScrollView,ImageBackground,Button,Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { firestore } from '../setup';
import { SignUpUser } from './ApiService';




const FBuyRegister = () => {
    const userCollection=firestore().collection('Users');
    const [userName, setUsername] = useState('');
    const [Pass, setPass] = useState('');
    const [cPass,setcPass]=useState('');
    const[email,setEmail]=useState('')

    const navigation =useNavigation();

   
    const onSignUpPressed=(userName,Pass,cPass)=>{
        var name=userName,pass=Pass,cpass=cPass;
      
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
        else if(cpass==''){
            alert('please confrim your password')
         }
        else if(nameL>=20 && nameL<="enter valid email"){
            alert("")
        }
        else if(passL<6 || passL >20){
            alert("password should be between 8 and 20 characters")
        }
        else if(cpass!=pass){
            alert("password is not confirmed")
        }
        else {
            userCollection.doc(name).set({
                Email:name,
                Password:pass,
                Type:"Buyer"
            }).then(()=>{
                console.log('user added');
            })
            SignUpUser(name,pass).then(data=>{
                alert(data);
            }).catch(error=>{
                alert(error);
            });
        };
    }
    return(
        <View>
             <View style={{marginTop:30}}>
                 <Text style={{color:'red', fontSize:15}}>Register yourself as a Buyers</Text>
          
          
                 
                 <TextInput style={styles.input}
                     placeholder="email"
                     onChangeText={newText=> setUsername(newText)}
                        value={userName}
                     placeholderTextColor='#000000'
                />

                <TextInput style={styles.input}
                     placeholder="password"
                     onChangeText={newText=> setPass(newText)}
                     secureTextEntry={true}
                     value={Pass}
                     placeholderTextColor='#000000'
                />

                    <TextInput style={styles.input}
                                        placeholder="password"
                                        onChangeText={newText=> setcPass(newText)}
                                        value={cPass}
                                        placeholderTextColor='#000000'
                                        />
          

        </View>
        
             <View style={styles.terms} >
             <Text>By registering yourself you will agree to our <Text style={{color:'#000000'}}>Terms of service</Text> and <Text style={{color:'#000000'}}>privacy policy</Text></Text>
        </View>
        
        
        <View style={styles.Button}> 
                  <TouchableOpacity onPress={()=>onSignUpPressed(userName,Pass,cPass)}>
                    <View style={styles.signupbutton} >
                        <Text style={styles.signupbuttonText}>Sign up</Text>
                    </View>
                  </TouchableOpacity>
                  </View>
                  <View style={{marginTop:10}}>
                  <TouchableOpacity  onPress={ ()=>navigation.navigate('Login')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Sign in</Text>
                    </View>
                  </TouchableOpacity>
                  </View>
        </View>
       
    )
}
export default FBuyRegister;
const styles=StyleSheet.create({
    input: {
        margin: 5,
        height: 45,
        borderColor: '#000000',
        borderWidth: 1.5,
        borderRadius:5,
        paddingLeft:10
     },
     terms:{
        flexDirection:'row',
        flex:1,
        justifyContent:'flex-start',
        marginTop:5
     },
     Button:{
        marginTop:30
    },
    button: {
       borderRadius: 8,
       paddingVertical: 14,
       paddingHorizontal: 10,
       borderWidth:2,
       borderColor:'#008b8b',
       backgroundColor: '#ffffff',
   },
   signupbutton:{
       borderRadius: 8,
       paddingVertical: 14,
       paddingHorizontal: 10,
      
       backgroundColor: '#008b8b',
   },
   buttonText: {
       color: '#008b8b',
       fontWeight: 'bold',
       textTransform: 'uppercase',
       fontSize: 16,
       textAlign: 'center',
   },
   signupbuttonText: {
       color: '#ffffff',
       fontWeight: 'bold',
       textTransform: 'uppercase',
       fontSize: 16,
       textAlign: 'center',
   },
})
