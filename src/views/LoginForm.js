'use strict';

import React, { Component } from 'react';

import {
	StyleSheet,
  	View,
	TextInput
} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import * as Keychain from 'react-native-keychain';
class LoginForm extends Component {

	constructor(props){
		super(props);
		this.state =  { 
			username: '',
			password: '',
			biometryType: null
		};
	}
	componentDidMount(){
		this._loadInitialState().done();
	}
	_loadInitialState = async()=>{
		//var user = AsyncStorage.getItem('user');
		// if (user!==null) {
		// 	//this.props.navigation.navigate('Home');
		// }
		// Keychain.getSupportedBiometryType().then(biometryType => {
		// 	this.setState({ biometryType });
		//   });
	}
  render() {
    return (
      <View style = {styles.container}>
				<Input 
				leftIcon={
					<Icon
						name='envelope-o'
						color='rgba(0, 0, 0, 0.38)'
						size={25}
						style={{backgroundColor: 'transparent'}}
					/>
				}
					onChangeText = {(username)=> this.setState({username})}
				  placeholder = "Username or Email"
					inputStyle = {styles.input}>
      	</Input>
				<Input 
					leftIcon={
						<SimpleIcon
							name='lock'
							color='rgba(0, 0, 0, 0.38)'
							size={25}
							style={{backgroundColor: 'transparent'}}
						/>
					}
					secureTextEntry
					onChangeText = {(password)=>this.setState({password})}
					placeholder = "Password"
					inputStyle = {styles.input}>
      	</Input>
				<Button 
					title={'Login'}
					buttonStyle={styles.loginButton}
					onPress={this.login}
				/>
      </View>
    );
	}
	login = async () =>{
		console.log(this.props);
		console.log("***************");
		console.log(this.state)
		try {
			let res = await fetch('http://192.168.0.15:4040/api/auth/login', {
				method: 'POST',
				headers: {
				  Accept: 'application/json',
				  'Content-Type': 'application/json',
				},
				body: JSON.stringify({
				  username: this.state.username,
				  password: this.state.password,
				}),
			  });
			let resJson = await res.json();
			console.log(res)
			console.log(resJson);
			try {
				const savePwd = await Keychain.setGenericPassword(resJson.username, resJson.token);
				console.log(savePwd);
			} catch (error) {
				console.log('Save password failed');
				console.log(error);
			}
			
			try {
				// Retreive the credentials
				const credentials = await Keychain.getGenericPassword();
				if (credentials) {
				  console.log('Credentials successfully loaded for user ' + credentials.username);
				} else {
				  console.log('No credentials stored')
				}
			  } catch (error) {
				console.log('Keychain couldn\'t be accessed!', error);
			  }
			  await Keychain.resetGenericPassword();

		} catch (error) {
			
		}
	}
}

const styles = StyleSheet.create({
	container:{
		marginBottom: 150,
		alignItems: 'center',
    	justifyContent: 'center'
	},
	input:{
		height: 50,
		alignItems:'center',
	//backgroundColor: 'rgba(255, 255, 255, 0.2)',
		paddingHorizontal: 30,
		justifyContent: 'center'
	},
	loginButton:{
		height:50,
		width:280,
		alignItems:'center',
		marginTop:50
	}
});


export default LoginForm;