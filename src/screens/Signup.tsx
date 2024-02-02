import React, {useState, useContext }from 'react'
import {View, Text, TextInput, Button, TouchableOpacity, StyleSheet} from 'react-native'
import Login from './LoginScreen'
import {AuthContext} from '../context/AuthContext';
import Spinner from "react-native-loading-spinner-overlay"

const Signup = (props) => {

	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const {isLoading, register} = useContext(AuthContext);
	
	return (
		<View style={styles.container}>
		 <Text style={styles.logins}>Registration</Text>
		<Spinner  visible={false} />
			<View style={styles.wraper}>
				<TextInput 
					value={email} 
					style={styles.input} 
					placeholder="Enter Email"
					onChangeText={text => setEmail(text) } 
				/>
				<TextInput  
					value={password} 
					style={styles.input} 
					placeholder="Enter Password" 
					onChangeText={text => setPassword(text) }
					secureTextEntry 
				/>

				<Button title="Registration" 
				onPress={() => {
					register(email, password);
				}} />
				<View style={{ flexDirection: 'row', marginTop: 20 }} >
						<Text>Already have an account ?</Text>
						<TouchableOpacity onPress={() => props.navigation.navigate("Login")} >
							<Text style={styles.link} >Login</Text>
						</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: "#6eccf5",
		marginTop: "50%",
		borderTopLeftRadius: 60,
		borderTopRightRadius: 60,
	},
	wraper:{
		width: "80%"
	},
	input: {
		marginBottom: 12,
		borderWidth:1,
		borderColor: "#fff",
		borderRadius: 5,
		paddingHorizontal: 14
	},
	link: {
		color: "blue",
	},
	logins:{
		fontSize: 50,
		marginTop: "-30%",
		marginBottom: 30,
		fontWeight: "bold"
	}
});
export default Signup;