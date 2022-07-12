import React,{useState,useEffect} from 'react'
import{Text,View,StyleSheet,Image,Modal,Animated,TouchableOpacity } from 'react-native'
import { ScrollView, TextInput, } from 'react-native-gesture-handler';
import{firebase,firestore} from '../setup';

const ModelPooup=({visible,children})=>{
    const[showModal,setShowModal]=useState(visible);
    const scaleValue=React.useRef(new Animated.Value(0)).current;
    useEffect(()=>{
        toggleModal();
    },[visible]);
    const toggleModal=()=>{
        if(visible){
            setShowModal(true);
            Animated.spring(scaleValue,{
                toValue:1,
                duration:300,
                useNativeDriver:true,

            }).start();
        }else{
            setTimeout(()=>setShowModal(false),200);
            Animated.timing(scaleValue,{
                toValue:0,
                duration: 300,
                useNativeDriver:true
            }).start();
            
        }
    }
    return (
      <Modal transparent visible={showModal}>
          <View style={styles.modalBackground}>
                <Animated.View style={[styles.modalcontainer,{transform:[{scale:scaleValue}]}]}>
                    {children}
                </Animated.View>
          </View>
      </Modal>
    );
   
}

const Shipment=({route,navigation})=>{
    const Shipment=firestore().collection('Shipment');
    const[visible,setVisible]=useState(false);
    const[fname,setFname]=useState('')
    const[lname,setLname]=useState('')
    const[city,setCity]=useState('')
    const[address,setAddress]=useState('')
    const[postalcode,setPostalcode]=useState(null)
    const[number,setNumber]=useState('')

    const onSubmission=(Fname,Lname,Address,Postalcode,City,Number)=>{
        
        var fname=Fname,lname=Lname,address=Address,postalcode=Postalcode,city=City,number=Number;
        if(fname == '' || lname=='' || address=='' || postalcode=='' || city=='' || number==''){
            alert("enter all the credientials")
        }
        else{
            Shipment.doc(route.params.Pid).set({
                customerEmail:firebase.auth().currentUser.email,
                ProducOwnerEmail:route.params.Email,
                Pid:route.params.Pid,
                name:fname+lname,
                address:address,
                postalcode:postalcode,
                city:city,
                number:number
            }).then(()=>{
                console.log('item added');
            })
            setVisible(true)
        }
    }
    return(
        <ScrollView style={{flex:1,backgroundColor:'#ffffff'}}>
            
           
            <View style={{borderColor:'#F5F5F5',borderWidth:1,marginTop:20}}></View>
                <View style={{marginTop:5,marginHorizontal:10}}>
                    <Text style={{fontSize:15,color:'#808080'}}>Cart   /   Shipment details</Text>
                </View>  
                <View style={{borderColor:'#F5F5F5',borderWidth:1,marginTop:10,marginBottom:10}}></View>
            <View style={{borderWidth:1,borderColor:'#000000',marginTop:10}}></View>
            <View  style={{paddingTop:20,flexDirection:'row'}}>
                <View>
                    <Image
                    source={require('../images/cartlogo.png')}
                    style={{height:20,width:40,borderRadius:20,marginRight:280}}/>
                </View>
                <View style={styles.priceview}>
            
                    <Text style={{fontSize:20}}>Rs{' '}{route.params.Price}</Text>
                </View>
            </View>
            
            <View style={{borderWidth:1,borderColor:'#000000'}}></View>
            <View style={styles.headerp}>
                <Text style={{fontSize:30}}>Shipping Details</Text>
            </View>
            <View style={{alignItems:'center'}} >
            <TextInput  style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder = "First name"   
                        placeholderTextColor = "#808080"
                        onChangeText={newText=> setFname(newText)}
                       defaultValue={fname}
                        autoCapitalize = "none"/>
                        <TextInput  style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder = "Last name"   
                        placeholderTextColor = "#808080"
                       onChangeText={newText=> setLname(newText)}
                        defaultValue={lname}
                        autoCapitalize = "none"/>
                <TextInput  style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder = "City"   
                        placeholderTextColor = "#808080"
                        onChangeText={newText=> setCity(newText)}
                        defaultValue={city}
                        autoCapitalize = "none"/>
                        <TextInput  style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder = "Address"   
                        placeholderTextColor = "#808080"
                        onChangeText={newText=> setAddress(newText)}
                        defaultValue={address}
                        autoCapitalize = "none"/>
                        <TextInput  style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder = "Postal Code"   
                        placeholderTextColor = "#808080"
                        onChangeText={newText=> setPostalcode(newText)}
                        defaultValue={postalcode}
                        autoCapitalize = "none"/>
                        <TextInput  style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder = "Phone Number"   
                        placeholderTextColor = "#808080"
                        onChangeText={newText=> setNumber(newText)}
                        defaultValue={number}
                        autoCapitalize = "none"/>
            </View>
                        <ModelPooup visible={visible}>
                                    <View style={{alignItems:"center"}}>
                                        <View style={styles.header}>
                                            <TouchableOpacity onPress={()=>setVisible(false)} >
                                                <Image source={require('../images/cross.jpg')}
                                                    style={{height:30,width:30}}
                                                />
                                            </TouchableOpacity>
                                            
                                        </View>
                                    </View>
                                    <View style={{alignItems:'center'}}>
                                    <Image source={require('../images/successicon.png')}
                                        style={{height:150,width:150,marginVertical:10}}
                                            />
                                    </View>
                                
                                    <Text style={{marginVertical:30,fontSize:20,textAlign:'center'}}>Congratulations ! Your Order is placed successfully order will be reached you in 14-15 days</Text>
                                </ModelPooup>
            <View style={{alignItems:'center',marginTop:20}}>
                <TouchableOpacity onPress={()=>onSubmission(fname,lname,city,address,postalcode,number)}>
                    <View style={styles.submit}>
                        <Text style={{color:'#008b8b',fontSize:20}}>submit</Text>
                    </View>
                </TouchableOpacity>
               
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Cart')} style={{marginLeft:10} }>
                    <View style={{flexDirection:'row'}}>
                    <Image
                    source={require('../images/arrowleft.png')}
                    style={{height:25,width:20,borderRadius:20,marginRight:10}}/>
                        <Text style={{color:'#000000',fontSize:20}}>Return to cart</Text>
                    </View>
                </TouchableOpacity>
           
        </ScrollView>
    )
}
export default Shipment
const styles= StyleSheet.create({
    headerp:{
        alignItems:'center',
        margin:10
    },
    input: {
        margin: 5,
        height: 45,
        width:300,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius:5,
        paddingLeft:10
     },
     priceview:{
         paddingHorizontal:10,
       
        
     },
     submit:{
        height:50,
        width:300,
        borderColor:'#008b8b',
        borderWidth:3,
        backgroundColor:'#ffffff',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:12
     },
     modalBackground:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0.5)',
        justifyContent:'center',
        alignItems:'center'
    },
    modalcontainer:{
        width:'80%',
        backgroundColor:'#ffffff',
        paddingHorizontal:20,
        paddingVertical:30,
        borderRadius:20,
        elevation:20
    },
    header:{
        width:'100%',
        height:40,
        alignItems:'flex-end',
        justifyContent:'center'
    }
})