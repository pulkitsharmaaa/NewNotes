import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../../screens/Login';
import BottomNavigator from './BottomNavigator';
import Signup from '../../screens/Signup';

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomNavigator"
          component={BottomNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
  
  );
};

export default AppNavigator;
