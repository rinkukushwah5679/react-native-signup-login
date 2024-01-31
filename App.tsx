import React from 'react';
import {Text, View} from 'react-native';
import Navigation from './src/Components/Navigation';
import {AuthProvider} from './src/context/AuthContext';
import FlashMessage from "react-native-flash-message";


function App() {
  return(
    <>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
      <FlashMessage position="top" />
    </>
  );
};

export default App;
