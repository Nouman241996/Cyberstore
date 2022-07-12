import React,{useState,useEffect} from 'react'
import {View,Text,ScrollView,StyleSheet,TouchableOpacity} from 'react-native'
import { firestore,firebase } from '../setup'
const SellerShop=({navigation})=>{
    const user=firebase.auth().currentUser.email;
    const usersCollectionRef = firestore().collection('Shops');
    const [shop,setShop]=useState([])
    const Shops=firestore().collection('Shops');
    useEffect(()=>{
        fetchdata();
    },[])
    const fetchdata=()=>{
        let temp=[]
        const snapshot=Shops.where('userEmail','==',user).get();
        snapshot.then(querySnapshot=>{
            querySnapshot.forEach((doc)=>{
                const data=doc.data();
                console.log(doc.data());
                temp.push(data);
            })
            setShop(temp);
        })
    }
    const Deleteshop=(shop)=>{
        usersCollectionRef.doc(shop).delete().then(()=>{
        }).catch((err)=>{

        })
    }
    return(
        <ScrollView style={{flex:1,backgroundColor:'#ffffff'}}>
            {shop && shop.map((data)=>{
                return(
                    <View  style={{alignItems:'center',margin:10}}>
                        <View  style={styles.shopview}>
                            <Text style={{fontSize:35,color:'#000000',fontWeight:'bold'}}>{data.Shop}</Text>
                            <View style={{flex:1,flexDirection:'column',alignItems:'flex-end',marginBottom:50}}>
                                <TouchableOpacity style={{marginTop:15}} onPress={()=>navigation.navigate('ProductsSeller',{Shop:data.Shop})}>
                                    <View style={styles.viewprod}>
                                        <Text style={{fontSize:20,color:'#ffffff'}}> view products</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{marginTop:5}} onPress={()=>Deleteshop(data.Shop)}>
                                    <View style={styles.viewprod}>
                                        <Text style={{fontSize:20,color:'#ffffff'}}> Delete Shop</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                )
            })}
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
        </ScrollView>
    )
}
export default SellerShop;
const styles=StyleSheet.create({
    shopview:{
        backgroundColor:"#ffffff",
        borderColor:'#000000',
        borderWidth:2,
        width:'90%',
        height:200,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    },
    viewprod:{
        width:200,
        height:50,
        backgroundColor:'#008b8b',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    }
})