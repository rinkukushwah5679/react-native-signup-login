import React, { createContext, useState, useEffect } from 'react';
import { BASE_URL } from "../config";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage, hideMessage } from "react-native-flash-message";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [userInfo, setUserInfo] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [splashLoading, setSplashLoading] = useState(false);

  const register = (email, password) => {
  	setIsLoading(true);
    axios.post(`${BASE_URL}/api/v1//sign_up`, {
			user: {
			  email: email,
			  password: password
			}
    })
      .then(res => {
        let userInfo = res.data.user;
        setUserInfo(userInfo);
	      AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
	      setIsLoading(false);
        console.log(userInfo);
      })
      .catch(e => {
        console.log(`register error ${e}`);
        setIsLoading(false);
      });
  };

  const login = (email, password) => {
  	setIsLoading(true);
  	axios.post(`${BASE_URL}/api/v1//sign_in`, {
			user: {
			  email: email,
			  password: password
			}
    })
    .then(response => {
      let userInfo = response.data;
      setUserInfo(userInfo);
      AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      setIsLoading(false);
    })
    .catch(e => {
      console.log(`==================Login error ${e}`);
      setIsLoading(false);
    });
  };

  const logout = () => {
  	setIsLoading(true);
  	axios
    .delete(
      `${BASE_URL}/api/v1/sign_out`,
      {
        headers: {
          'User-Token': `${userInfo.data.user.authentication_token}`,
        },
      }
    )
    .then(res => {
      let userInfo = null;
      console.log(userInfo);
      setUserInfo(userInfo);
      AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      setIsLoading(false);
    })
    .catch(e => {
      console.log(`Logout error ${e}`);
      setIsLoading(false);
    });
  };

  const isLoggedIn = async () => {
  	try{
  		setSplashLoading(true);
  		let userInfo  = await AsyncStorage.getItem('userInfo');
  		userInfo = JSON.parse(userInfo);
  		if (userInfo) {
  			setUserInfo(userInfo);
  		}
  		setSplashLoading(false);
  	} catch(e) {
  		setSplashLoading(false);
  		console.log(`is logged in error ${e}`);
  	}
  };

  useEffect(() => {
  	isLoggedIn();
  }, []);


  return (
    <AuthContext.Provider value={{login, splashLoading, register, isLoading, userInfo, logout}}>{children}</AuthContext.Provider>
  );
};
