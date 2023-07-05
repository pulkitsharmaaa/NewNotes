import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { login } from '../src/redux/authSlice';

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()

  const handleLogin = async () => {
    if (username === 'admin' && password === 'admin') {
      dispatch(login({login: true}))

      navigation.navigate('BottomNavigator');
    } else {
      console.log('Login failed');
    }
  };

  return (
    <View style={styles.main}>
      <Text style={styles.heading}>Login</Text>
      <TextInput
        placeholder="Username"
        style={styles.inputField}
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        style={styles.inputField}
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <Text style={styles.btnTxt}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginbtn}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={{color: 'blue'}}>Signup Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    marginBottom: 20,
    fontSize: 24,
    textDecorationLine: 'underline',
  },
  inputField: {
    borderWidth: 0.5,
    width: '90%',
    marginBottom: 10,
    alignSelf: 'center',
  },
  btn: {
    height: 40,
    width: '90%',
    backgroundColor: 'blue',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    fontSize: 18,
    color: 'white',
  },
  loginbtn: {
    marginTop: 10,
  },
});
