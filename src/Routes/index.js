import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import PayButton from '../Components/PayButton';

import Home from '../Screens/Home';
import Wallet from '../Screens/Wallet';
import Pay from '../Screens/Pay';

const Tab = createBottomTabNavigator();

const Icons ={
  Home: {
    lib: AntDesign,
    name: 'home'
  },
  Wallet: {
    lib: AntDesign,
    name: 'creditcard'
  },
  Notification: {
    lib: Ionicons,
    name: 'ios-notifications-outline'
  },
  Settings: {
    lib: AntDesign,
    name: 'setting'
  }
}

function Navigation() {
  return(     
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if( route.name === 'Pay' ){
            return (
              <PayButton 
                onPress={() => navigation.navigate('Pay')}
                focused={focused}
              />
            );
          }
          const { lib: Icon, name } = Icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#131418',
          borderTopColor: 'rga(255, 255, 0.2)',
        },
        activeTintColor: '#FFF',
        inactiveTintColor: '#92929C'
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          title: 'Início'
        }} 
      />
      <Tab.Screen 
        name="Wallet" 
        component={Wallet}
        options={{
          title: 'Carteira'
        }} 
      />
      <Tab.Screen 
        name="Pay" 
        component={Pay} 
        options={{
          title: ''
        }}
      />
       <Tab.Screen 
        name="Notification" 
        component={Pay}
        options={{
          title: 'Notificação'
        }} 
      />
      <Tab.Screen 
        name="Settings" 
        component={Pay} 
        options={{
          title: 'Ajustes'
        }}
      />
    </Tab.Navigator>
  );
}
export default Navigation;