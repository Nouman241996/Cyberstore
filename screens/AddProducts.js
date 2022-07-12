import  React,{useState,useEffect} from 'react';
import { StyleSheet, TouchableOpacity,TextInput,View,Text,ImageBackground,Dimensions, ScrollView, } from 'react-native';
import { firestore,firebase } from '../setup';
import Geolocation from '@react-native-community/geolocation';
import * as ImagePicker from "react-native-image-picker";
import {Picker} from '@react-native-picker/picker';
import data from '../model/data';
const AddProducts = () => {
    Geolocation.getCurrentPosition(data=>{
        setLongitude(data.coords.longitude);
        setLatitude(data.coords.latitude);
    })
    const[longitude,setLongitude]=useState(null);
    const[latitude,setLatitude]=useState(null);
    const [Data,setData]=useState([]);
    const[photo]=useState(null);
    const[shop,setShop]=useState('');
    const[price,setPrice]=useState('');
    const[shopname,setShopname]=useState('');
    const[type,setType]=useState('');
    const[des,setDes]=useState('');
    const[Pid,setPid]=useState('');
    const[phone,setPhone]=useState('');
    const usersCollectionRef = firestore().collection('Shops');
    const usersCollectionprod =firestore().collection('Shops').doc(shop).collection('products');

    const openlibrary=()=>{
       const options={ noData:true}
       ImagePicker.launchImageLibrary(options,response =>{
          
           
           if(response.uri){
               const source={uri : response.uri}
            photo(source);
           }
       });
    };
    const additem=(Pid,shop,shopname,type,des,price)=>{
        usersCollectionRef.doc(shop).set({
            userEmail:firebase.auth().currentUser.email,
            Shop:shop,
            Type:type,
            Longitude:longitude,
            Latitude:latitude,
        }).then(()=>{
            console.log('item added');
        })
        usersCollectionprod.doc(Pid).set({
            name:shopname,
            Type:type,
            Description:des,
            Price:price,
            Pid:Pid,
            Phone:phone,
         
            Date_added:firestore.FieldValue.serverTimestamp(),
            userEmail:firebase.auth().currentUser.email,
        }).then(()=>{
            console.log('item added');
        })
       
    }
    const DeleteShop=()=>{
       Data.map(data=>{
           if(data.userEmail==firebase.auth().currentUser.email){
                usersCollectionRef.doc(data.Shop).delete().then(()=>{
                }).catch((err)=>{
        
                })
           }
       })
       
    }
  
    useEffect(() => {
        fetchdata();
      }, [])
    const fetchdata=()=>{
        const temp=[];
        usersCollectionprod.get().then(documentSnapshot =>{
            documentSnapshot.forEach(documentSnapshot=>{
               console.log(documentSnapshot.data());
            });
        });
        usersCollectionRef
        .get()
        .then(documentSnapshot =>{
            documentSnapshot.forEach(documentSnapshot=>{
             console.log(documentSnapshot.data());
             const data=documentSnapshot.data();
             temp.push(data)
            });
            setData(temp);
        });
    };
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
                                Create your shop
                            </Text>
                          
                           
                        </View>
                        <View style={{marginTop:5}}> 
                            <TextInput style={styles.input} 
                                underlineColorAndroid="transparent"
                                placeholder = "enter your shop name"
                                placeholderTextColor = "#9a73ef"
                                onChangeText={newShop=> setShop(newShop)}
                                defaultValue={shop}
                                autoCapitalize = "none"/>
                        </View>
                        
                        <View style={{marginTop:30}}>
                            <Text style={{color:'#008b8b',fontSize:30}}>Add your product</Text>
                          
                            <TextInput style={styles.input} 
                            underlineColorAndroid="transparent"
                            placeholder = "Product id"
                            placeholderTextColor = "#9a73ef"
                            onChangeText={newShop=> setPid(newShop)}
                            defaultValue={Pid}
                            autoCapitalize = "none"/>
                             <TextInput style={styles.input} 
                            underlineColorAndroid="transparent"
                            placeholder = "product name"
                            placeholderTextColor = "#9a73ef"
                            onChangeText={newName=> setShopname(newName)}
                            defaultValue={shopname}
                            autoCapitalize = "none"/>
                           
                             <Picker
                             style={styles.picker}
                            selectedValue={type}
                            onValueChange={(itemValue, itemIndex) =>
                                setType(itemValue)
                            }>
                            <Picker.Item label="clothing" value="clothing" />
                            <Picker.Item label="Mobile" value="Mobile" />
                            <Picker.Item label="Laptop" value="Laptop" />
                            <Picker.Item label="Cars" value="Cars" />
                            </Picker>
                             <TextInput style={styles.input} 
                            underlineColorAndroid="transparent"
                            placeholder = "product description"
                            placeholderTextColor = "#9a73ef"
                            onChangeText={newDesc=> setDes(newDesc)}
                            defaultValue={des}
                            autoCapitalize = "none"/>
                            <TextInput style={styles.input} 
                            underlineColorAndroid="transparent"
                            placeholder = "Price"
                            placeholderTextColor = "#9a73ef"
                            onChangeText={newDesc=> setPrice(newDesc)}
                            defaultValue={price}
                            autoCapitalize = "none"/>
                             <TextInput style={styles.input} 
                            underlineColorAndroid="transparent"
                            placeholder = "enter your phone number"
                            placeholderTextColor = "#9a73ef"
                            onChangeText={newDesc=> setPhone(newDesc)}
                            defaultValue={phone}
                            autoCapitalize = "none"/>
                           
                        </View>
                        <View style={{marginTop:10,marginLeft:8}}>
                            <TouchableOpacity onPress={()=>openlibrary()}>
                                <Text style={{color:'#008b8b',fontSize:16}}>Choose photo</Text>
                            </TouchableOpacity>
                        </View>
                        
                        <View style={styles.Button}> 
                        <TouchableOpacity onPress={()=>additem(Pid,shop,shopname,type,des,price,phone)}>
                            <View style={styles.signupbutton}>
                                <Text style={styles.signupbuttonText}>Add item</Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                       
                       
                    
                    </View>
             </View>
        </ScrollView>
        
      
    );
  };
export default AddProducts;
const styles=StyleSheet.create({
   
    bottomview:{
        flex:1.5,
        backgroundColor:'#ffffff',
        bottom:50,
        borderTopStartRadius:60,
        borderTopEndRadius:60,
    },
    picker:{
        height: 50,
        margin: 5,
        width:270,
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius:5,
        color:'#ffffff',        
        backgroundColor:'#008b8b'
    },
     input: {
        margin: 5,
        height: 50,
        borderColor: '#000000',
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
         marginTop:10
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