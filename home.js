import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    ImageBackground,
    ActivityIndicator,
    Image,
    TextInput,
    ScrollView,
    SafeAreaView
} from 'react-native';

const Home = (props) => {

    
    return (
        <SafeAreaView>
        <View>
            <Text>Hello Home!</Text>
        </View>
        <TouchableOpacity
        onPress={()=> props.navigation.navigate('Homie')}
        >
            <Text>Press ME!</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=> props.navigation.navigate('Pract')}
        >
            <Text>Press ME to go to Practice!</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=> props.navigation.toggleDrawer()}
        >
            <Text>Press ME to Open drawer</Text>
        </TouchableOpacity>
        </SafeAreaView>
    )
};
export default Home;
