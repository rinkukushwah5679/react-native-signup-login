import React, {useState, useContext } from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {AuthContext} from "../context/AuthContext"

const Home = (props) => {
	const { userInfo, logout, isLoading } = useContext(AuthContext);
	return(
		<View style={{marginHorizontal: 40, marginVertical: 100}}>
			<Text style={{color: '#2BB789', fontSize: 64, marginBottom: 40}}>Let's start</Text>
			<Button title="Logout" color="red" onPress={logout} />
		</View>
	)
};

const styles = StyleSheet.create({})
export default Home;