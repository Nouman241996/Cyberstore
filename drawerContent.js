import React, { Component } from 'react';

import { View, StyleSheet, Image, Text,TouchableOpacity,ScrollView ,FlatList} from 'react-native';
class drawerContents extends Component {

    constructor() {
        super();
       
    }
   
   

    render() {
        return (
            <View style={{ width: '100%',
            
            flex:1,
            backgroundColor: "Orange",
            paddingTop: 20,}}>
                <View>
                    <TouchableOpacity
                    onPress={()=>
                    
                    this.props.navigation.toggleDrawer()}
                    >
                    <Text>
                    I am drawer
                </Text>
                    </TouchableOpacity>
                
                </View>
               
               </View>
        );
    }
}


export default drawerContents;