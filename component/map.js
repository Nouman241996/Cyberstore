import React from 'react'
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {
    View,StyleSheet
} from 'react-native'
import data from '../model/data';

const Map=({route })=>{
    Geolocation.getCurrentPosition(data=>console.log(data))
    return(
        <View > 
              <MapView 
              zoomEnabled={true}
              loadingEnabled={true}
           
              style={styles.map}
              
            initialRegion={{
           latitude: route.params.lat,
            longitude: route.params.lon,
            latitudeDelta:  route.params.lat,
            longitudeDelta: route.params.lon,
            }}
            
        >
            <MapView.Marker
                        coordinate={{latitude:   route.params.lat                       
                        ,longitude: route.params.lon, latitudeDelta: route.params.lat,
                        longitudeDelta:route.params.lon,}}
                        title={(route.params.Shop)}
                        description={("shop")} 
                    />        
        </MapView>
        </View>
    )
}
export default Map;
const styles=StyleSheet.create({
    map:{
        width:'100%',
        height:'100%'
    }
})