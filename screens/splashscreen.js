import * as React from 'react';
import { View ,Animated,Easing,Image,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Splashscreen=()=>{
    const trans=React.useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();
    React.useEffect(()=>{
        Animated.timing(trans,{
            toValue:100,
            easing:Easing.bounce,
            delay:400,
            duration:1000,
            useNativeDriver:true,
        }).start();
    },[]);
        setTimeout(() => {
          navigation.navigate('Startscreen');
        }, 2000);
    return(
        <View style={{flex:1,backgroundColor:'#ffffff'}}>
           
               
               <Animated.View
            style={{
                flex:1,
                alignItems: 'center',
                marginTop:150,
               
              
                transform:[{translateY:trans}],
            }}>
            
            <Image  source={require('../images/splash.png')} style={{width: 200, height: 200}} />
            
            </Animated.View>
            
        </View>
             
      
        
       
    );
};
export default Splashscreen;