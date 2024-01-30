import React from 'react';
import {Text, View} from 'react-native';
import Navigation from './src/Components/Navigation';
import {AuthProvider} from './src/context/AuthContext';

function App() {
  return(
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

export default App;
