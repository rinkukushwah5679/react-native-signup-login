import React, {useState, useContext } from 'react'
import {View, Text} from 'react-native'
import Home from '../screens/Home'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {AuthContext} from "../context/AuthContext"
import SplashScreen from "../SplashScreen"

const Stack = createNativeStackNavigator();

const Navigation = () => {

  const {userInfo, splashLoading} = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
      {splashLoading ? (
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />
        ) : userInfo != ""  ? (
          <Stack.Screen name="Home" component={Home} />
          ) : (
          <>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="Registration" component={Signup} options={{headerShown: false}} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;