import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity,TextInput, View,Text,ScrollView,ImageBackground,Button,Dimensions } from 'react-native';
import { useContext } from 'react/cjs/react.production.min';
import { AuthContext } from '../AuthProvider';
import CustomSwitch from '../component/CustomSwitch';
import BuyForm from '../component/BuyerFormReg';
import SellerForm from '../component/SellerFormReg';
const Register = ({ navigation,props}) => {
    const [userName, setUsername] = useState('');
    const [Pass, setPass] = useState('');
    const [cPass,setcPass]=useState('');
    const [Buyer,setBuyer]=useState(1);
    const [Seller,setSeller]=useState()
    const onSelectSwitch = (value)=> {
        setBuyer(value);
      };
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
        else if(nameL>=8){
            alert("username should be 8 characters or less")
        }
        else if(passL<8 || passL >20){
            alert("password should be between 8 and 20 characters")
        }
        else if(cpass!=pass){
            alert("password is not confirmed")
        }
        else {
            navigation.navigate('Login')
        }
    }
 
    return (
        <ScrollView style={{flex:1 , backgroundColor:'#ffffff'}}
        showsVerticalScrollIndicator={false}>
            <ImageBackground source={require('../images/loginbg.jpg')}
            style={{
                height:Dimensions.get('window').height/4.5,
            }}>
                
                
            </ImageBackground>
            <View style={styles.bottomview}>
              <View style={{padding:40}}>
                  <Text style={{color:'#008b8b',fontSize:30}}>
                      Register
                  </Text>
                  <View style={{alignItems: 'center',marginTop:10}}>
                    <CustomSwitch
                    selectionMode={1}
                    roundCorner={true}
                    option1={'Buyer'}
                    option2={'Seller'}
                    onSelectSwitch={onSelectSwitch}
                    selectionColor={'#008b8b'}
                    />
                    
                 </View>
                    {Buyer==1 && <BuyForm />}
                     {Buyer==2 && <SellerForm/>}

              </View>
            </View>
        </ScrollView>
    );
  };
export default Register;
const styles=StyleSheet.create({
    
    bottomview:{
        flex:1.5,
        backgroundColor:'#ffffff',
        bottom:50,
        borderTopStartRadius:60,
        borderTopEndRadius:60,
    },
     input: {
        margin: 5,
        height: 45,
        borderColor: '#7a42f4',
        borderWidth: 1,
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

});