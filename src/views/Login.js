'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import LoginForm from './LoginForm';
const LOGO_IMAGE = require('../assets/images/logo_1024px.png');

class login extends Component {
  render() {
    return (
      <	KeyboardAvoidingView behavior= {(Platform.OS === 'ios')? "padding" : null} style = {styles.container} >
        <View style = {styles.logoContainer}>
          <ImageBackground 
            source={LOGO_IMAGE} 
            style = {styles.logo}
          />
          <Text style = {styles.title}>
            LifeTiles
          </Text>
        </View>
        <View style = {styles.formContainer}>
          <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
} 

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#fff'
  },

  logoContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'  
  },
  logo:{
    height: 200,
    width: 200
  },
  title:{
    marginTop:20,
    fontSize:40,
    color:'#2089dc'
  },
  formContainer:{
    flex:1
  }
});


export default login;