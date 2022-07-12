
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity,Animated, View, Text, ScrollView,TextInput,Button, ImageBackground, Dimensions, Pressable } from 'react-native';
import Fbuyerlogin from '../component/BuyerLogin';
import Rsellerlogin from '../component/SellerLogin';
import CustomSwitch from '../component/CustomSwitch';
const Login = ({ navigation }) => {
    const [userName, setUsername] = useState('');
    const [Pass, setPass] = useState('');
    const [Buyer,setBuyer]=useState(1);
    const [Seller,setSeller]=useState()
    const onSelectSwitch = (value)=> {
        setBuyer(value);
      };

    


    return (
             <ScrollView style={{flex:1 , backgroundColor:'#ffffff'}}
        showsVerticalScrollIndicator={false}>
            <ImageBackground source={require('../images/loginbg.jpg')}
            style={{
                height:Dimensions.get('window').height/3.5,
            }}>
               
                
            </ImageBackground>
            <View style={styles.bottomview}>
              <View style={{padding:40,marginTop:20}}>
                  <Text style={{color:'#008b8b',fontSize:30}}>
                      Welcome
                  </Text>
                  
                  <Text>
                      Dont have an acoount?
                    
                             <Text style={{color:'red',fontStyle:'italic'}}>
                          {' '}
                          Register now
                      </Text>
                   
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
                 {Buyer==1 && <Fbuyerlogin/>}
                 {Buyer==2 && <Rsellerlogin/>}
              
              </View>
            </View>
        </ScrollView>
      
       
    );
  };
export default Login;
const styles=StyleSheet.create({
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
     input: {
        margin: 5,
        height: 45,
        borderColor: '#7a42f4',
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
    errmsg:{
        color:'#ff0000',
        marginStart:5
    },

});