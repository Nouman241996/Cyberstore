import { firebase,firestore } from '../setup';
import React ,{useState,useEffect}from 'react';
import { SafeAreaView, View, FlatList, StyleSheet,Image ,Text, StatusBar} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import data from '../model/data';

  const Item = ({ title}) => (
    <View style={styles.item}>
         <Image
            source={require('../images/cartprod.jpg')}
            style={{height:100,width:100,borderRadius:100}}/>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{}</Text>
    </View>
  );
  
const Cart=({navigation})=>{
    
    const[Data,setData]=useState([]);
    const[price,setPrice]=useState([]);
    const cartRef =firestore().collection('Cart');
    let sum=0;
    Data.forEach(item=>{
        sum+=parseInt(item.Price, 10);
    })
    const fetchdata=async()=>{
        const temp=[];
      
        cartRef
        .where('userEmail','==',firebase.auth().currentUser.email)
       .get()
       .then(querySnapshot =>{
        querySnapshot.forEach((doc)=>{
          const data=doc.data();
           temp.push(data);
           
           console.log(doc.id,'=>',doc.data())
        });
        setData(temp);
       
    });
    };
    useEffect(() => {
        fetchdata();
      }, [])
      const Deleteprod=(Pid)=>{
            cartRef.doc(Pid).delete()
            .then(()=>{
              console.log('deleted')
            }).catch((error) => {
              console.error("Error removing document: ", error);
          });
        }
      const checkoutall=(sum)=>{
       if(sum==0){
         alert('cart is empty please buy somthing')
       }else{
        cartRef.where('userEmail','==',firebase.auth().currentUser.email)
        .get()
        .then(querySnapshot=>{
          querySnapshot.forEach((doc)=>{
            doc.ref.delete();
            console.log('items deleted')
          });
        })
        navigation.navigate('Shipment',{Price:sum})
      } 
       }
       
      const CheckoutSingleItem=(Price,Pid,Email)=>{
      cartRef.doc(Pid).delete()
       .then(()=>{
          console.log('deleted')
        }).catch((error) => {
          console.error("Error removing document: ", error);
      });   
      navigation.navigate('Shipment',{Price:Price,Pid:Pid,Email:Email})
      }
    
    const renderItem = ({ item }) => {
        
        return (
            <SafeAreaView>
                 <View style={styles.item}>
            <Image
               source={require('../images/cartprod.jpg')}
               style={{height:80,width:70,borderRadius:100}}/>
               <View>
               <Text style={styles.title}>{item.Name}{" "}<Text style={{fontSize:15}}>{item.Pid}</Text></Text>
                <Text style={{fontSize:15}}><Text style={{color:'red'}}>PKR{' '}</Text>{item.Price}</Text>
                <Text style={{fontSize:15}}>{item.Description}</Text>
                
               
                <View style={{marginLeft:20,marginTop:10,flexDirection:'row'}}> 
                <TouchableOpacity onPress={()=>CheckoutSingleItem( item.Price,item.Pid,item.OwnerEmail)}>
                  <View style={styles.Checkout}>
                      <Text style={{color:'#000000',fontSize:15}}>Check out</Text>
                  </View>
                </TouchableOpacity>
               
                <TouchableOpacity onPress={()=>Deleteprod(item.Pid)}>
                <View style={styles.Delete}>
                    <Text style={{color:'#ffffff',fontSize:15}}>Delete</Text>
                </View>
                
                </TouchableOpacity>
                </View>
               
               </View>
              
             </View>
                
            </SafeAreaView>
           
        )
    }

    return(
       
        
        <View style={{flex:1,backgroundColor:'#ffffff'}} > 
         <View style={{borderColor:'#F5F5F5',borderWidth:1,marginTop:20}}></View>
                <View style={{marginTop:5,marginHorizontal:10}}>
                    <Text style={{fontSize:15,color:'#808080'}}>Cart   / </Text>
                </View>  
                <View style={{borderColor:'#F5F5F5',borderWidth:1,marginTop:10,marginBottom:10}}></View>
        <View style={{backgroundColor:'#ffffff'}}>
          <FlatList
              data={Data}
              renderItem={renderItem}
              keyExtractor={item => item.id }
          />
        </View>

           
         
         <View >
           
           <TouchableOpacity style={{flexDirection:'row',marginTop:5}} onPress={()=>navigation.navigate('Homescreen')}>
           <Image
               source={require('../images/arrowleft.png')}
               style={{height:20,width:20,borderRadius:20,marginRight:5}}/>
               <View >
                  <Text style={{fontSize:15}}>continue shoping</Text>
                </View>

          
           </TouchableOpacity>
        
           

         
          <View style={{paddingTop:10,paddingLeft:10,flexDirection:'row-reverse',}}>
              <Text style={{color:'#000000',fontSize:25,fontWeight:'bold'}}>Subtotal{' '}{sum}</Text>
              
          </View>
          <View style={{alignItems:'center',margin:20}}>
            <TouchableOpacity onPress={()=>checkoutall(sum)}>
              <View style={styles.Pcheckout}>
                  <Text style={{color:'#ffffff',fontSize:20}}>Proceed to Check out</Text>
              </View>
            </TouchableOpacity>
            
          </View>
          
        </View>
        <Text></Text>
        <Text></Text>
        <Text></Text>

        </View>
        
       
    )
}
export default Cart;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 3,
    },
    item: {
      backgroundColor: '#ffffff',
      borderRadius:20,
      borderWidth:2,
      borderColor:'#008b8b',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      flexDirection:'row'
    },
    title: {
      fontSize: 30,
    },
    Delete:{
      justifyContent:'center',
      alignItems:'center',
      width:100,
      height:50,
      backgroundColor:'red',
      borderRadius:30
    },
    Checkout:{
      justifyContent:'center',
      alignItems:'center',
      width:100,
      height:50,
      backgroundColor:'#ffffff',
      borderRadius:30,
      borderColor:'red',
      borderWidth:2,
      marginRight:5
    },
    Pcheckout:{
      width:300,height:70,
      backgroundColor:'#008b8b',
      borderRadius:15,
      alignItems:'center',
      justifyContent:'center'
    }
    
  });
  