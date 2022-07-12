import * as React from 'react';
import MainApp from './App';
import firebase from '@react-native-firebase/app';
import Auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCORroIZVk2d8wpYsApUyaBtEJsHGi_qxw",
    authDomain: "cybershop-eee89.firebaseapp.com",
    databaseURL:"https://cybershop-eee89.firebaseio.com",
    projectId: "cybershop-eee89",
    storageBucket: "cybershop-eee89.appspot.com",
    messagingSenderId: "895478766118",
    appId: "1:895478766118:web:5243c2d8b5c59d3d1564e7"
  };
 
  if( !firebase.apps.length){
     firebase.initializeApp(firebaseConfig);
  }
export  {firebase,Auth,firestore};
function Setup(){
    return <MainApp/>
}
export default Setup;
