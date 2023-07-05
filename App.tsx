import React, {useEffect, useState} from 'react';
import {Provider, useSelector} from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';
import BottomNavigator from './src/navigation/BottomNavigator';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const auth = useSelector((state: {auth: boolean}) => state.auth);

  useEffect(() => {
    setIsLogged(auth);
  }, []);

  return (
    <NavigationContainer>
      {isLogged ? <BottomNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
};

export default App;
