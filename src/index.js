import React from 'react';
import {StatusBar} from 'react-native';
import  { NavigationContainer } from '@react-navigation/native';

import Navigaton from './Routes';


function App() {
  return(
    <>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='#000'
      />
      <NavigationContainer>
        <Navigaton />
      </NavigationContainer>
    </>    
  );
}

export default App;