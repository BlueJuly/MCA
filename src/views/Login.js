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
  constructor(props){
    super(props);
  }

  componentDidMount(){
    // this._loadInitialState().done();
    console.log("props in Login are");
    console.log(this.props);
	}
  render() {
    return (
      <	KeyboardAvoidingView behavior= {(Platform.OS === 'ios')? "padding" : null} style = {styles.container} >
        <View style = {styles.logoContainer}>
          <Image 
            source={LOGO_IMAGE} 
            style = {styles.logo}
          />
          <Text style = {styles.title}>
            LifeTiles
          </Text>
        </View>
        <View style = {styles.formContainer}>
          <LoginForm {...this.props}/>
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