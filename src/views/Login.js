'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  KeyboardAvoidingView
} from 'react-native';
import LoginForm from './LoginForm';
const LOGO_IMAGE = require('../assets/images/logo_1024px.png');

class login extends Component {
  render() {
    return (
      <	KeyboardAvoidingView behavior = 'padding' style = {styles.container} >
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
    alignItems: 'center',
    flexGrow: 1,
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
  }
});


export default login;