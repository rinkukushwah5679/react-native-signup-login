import React, {useState, useContext } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {AuthContext} from "../context/AuthContext"

const Home = (props) => {
	const {userInfo} = useContext(AuthContext);
	return(
		<View style={{marginHorizontal: 40, marginVertical: 100}}>
			<Text style={{color: '#2BB789', fontSize: 64, marginBottom: 40}}>{console.warn(userInfo.data.id)}Let's start</Text>
		</View>
	)
};

const styles = StyleSheet.create({})
export default Home;