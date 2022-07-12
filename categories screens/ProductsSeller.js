import React,{useState,useEffect} from 'react'
import {View,Text,ScrollView,StyleSheet,TouchableOpacity} from 'react-native'
import { firestore,firebase } from '../setup'
const ProductsSeller=({route,navigation})=>{
    const user=firebase.auth().currentUser.email;
    const deleteprod=firestore().collection('Shops');
    const [shop,setShop]=useState([])
    const Shops=firestore().collection('Shops').doc(route.params.Shop).collection('products');
    useEffect(()=>{
        fetchdata();
    },[])
    const fetchdata=()=>{
        let temp=[]
        const snapshot=Shops.get();
        snapshot.then(documentSnapshot=>{
            documentSnapshot.forEach((doc)=>{
                const data=doc.data();
                console.log(doc.data());
                temp.push(data);
            })
            setShop(temp);
        })
    }
    const Deleteprod=(pid)=>{
        Shops.doc(pid).delete().then(()=>{
            console.log('item deleted')
        }).catch((err)=>{

        })
    }
    return(
        <ScrollView style={{flex:1,backgroundColor:'#ffffff'}}>
            {shop && shop.map((data,i=0)=>{
                i++
                return(
                    <View key={i} style={{alignItems:'center',margin:10}}>
                        <View  style={styles.shopview}>
                            <Text style={{fontSize:35,color:'#000000',fontWeight:'bold'}}>{data.name}</Text>
                            <Text>----------------------------------------------------------</Text>
                            <View>
                                <Text style={{fontSize:20,color:'red'}}><Text style={{color:'#000000',fontWeight:'bold'}}>Product ID{' '}</Text>{data.Pid}</Text>
                                <Text style={{fontSize:20,color:'#000000',marginLeft:20}}><Text style={{color:'green',fontWeight:'bold'}}>PKR{' '}</Text>{data.Price}</Text>
                                
                            </View>
                            <View style={{marginTop:10}}>
                            <TouchableOpacity onPress={()=>Deleteprod(data.Pid)}>
                                <View style={styles.viewdel}>
                                    <Text style={{color:'#ffffff'}}>Delete</Text>
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
export default ProductsSeller;
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
    },
    viewdel:{
        height:30,
        width:200,
        backgroundColor:'#008b8b',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    }
})