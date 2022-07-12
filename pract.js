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

const Pract = (props) => {

    
    return (
        <SafeAreaView>
          <View>
              <Text>Hello Practice!</Text>
          </View>
          <TouchableOpacity
          onPress={()=>props.navigation.goBack()}
          >
              <Text>
                  Go Back!
              </Text>
          </TouchableOpacity>
          </SafeAreaView>
    )
};
export default Pract;
