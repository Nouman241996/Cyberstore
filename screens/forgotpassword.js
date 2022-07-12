import  React,{useState} from 'react';
import { StyleSheet, TouchableOpacity,Keyboard ,TextInput,View,Text,ImageBackground,Dimensions, ScrollView, TouchableWithoutFeedback } from 'react-native';
import email from 'react-native-email'

const Forgotpassword = ({ navigation }) => {
    handleEmail = () => {
        const to = ['usamamukhtar0@gmail.com', 'usamamukhtar0@gmail.com'] // string or array of email addresses
        email(to, {
            // Optional additional arguments
            cc: to, // string or array of email addresses
            bcc: 'usamamukhtar0@gmail.com', // string or array of email addresses
            subject: 'Show how to use',
            body: 'Some body right here'
        }).catch(console.error)
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
              
                        <View style={{padding:40 ,marginTop:40}}>
                        <View style={{alignItems:'center'}}>
                            <Text style={{color:'#008b8b',fontSize:30}}>
                                Restore 
                            </Text>
                            <Text style={{paddingTop:10}}>Retsore your account.</Text>
                        </View>
                        
                        
                        <View style={{marginTop:100}}>
                        
                            <TextInput style={styles.input} 
                            underlineColorAndroid="transparent"
                            placeholder = " email"
                          
                            placeholderTextColor = "#9a73ef"
                            autoCapitalize = "none"/>
                        </View>
                        <View style={styles.terms} >
                            <Text style={{paddingLeft:5}}>Intructions will be sent to your<Text style={{color:'black'}}>{' '}email account</Text></Text>
                        </View>
                        
                        <View style={styles.Button}> 
                        <TouchableOpacity onPress={()=>handleEmail()} >
                            <View style={styles.signupbutton}>
                                <Text style={styles.signupbuttonText}>submit</Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                        
                    
                    </View>
             </View>
        </ScrollView>
    );
  };
export default Forgotpassword;
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
        height: 50,
        borderColor: '#7a42f4',
        borderWidth: 1,
        borderRadius:5,
        paddingLeft:10
     },
    
     terms:{
        flexDirection:'row',
        flex:1,
        justifyContent:'flex-start',
        marginTop:5,
       
     },
     Button:{
         marginTop:50
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