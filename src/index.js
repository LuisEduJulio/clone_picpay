import React from 'react';
import  { NavigationContainer } from '@react-navigation/native';

import Navigaton from './Routes';


function App() {
  return(
    <NavigationContainer>
      <Navigaton />
    </NavigationContainer>    
  );
}

export default App;