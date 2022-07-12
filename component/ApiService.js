
import React from 'react';
import { Auth } from '../setup';
import { firebase} from '../setup';

export const forgotPassword = (email) => {
    
     Auth().sendPasswordResetEmail(email)
     .then(function() {
        alert('Email has been sent to your account ')
        })
        .catch(function(error) {
        alert('not a valid mail')
        });
};
export const SignUpUser=(email,password) =>{
    
    return new Promise(function(){
        Auth().createUserWithEmailAndPassword(email,password)
        .then(()=>{
            alert('SignUp successfully')  
        })
        .catch(alert);
    });
}
export const SignInUser=(email,password) =>{
    
    return new Promise(function(){
        Auth().signInWithEmailAndPassword(email,password)
        .then(()=>{
          
        }).catch(error=>{
            reject(error);
        })
    });
}
export const SignOut=() =>{
    return new Promise(function(resolve,reject){
        Auth().signOut()
        .then(()=>{
            resolve('Sign Out Successfully');
        }).catch(error=>{
            reject(error);
        })
    });
}