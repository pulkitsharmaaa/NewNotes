import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Signup = () => {
    const navigation = useNavigation
  return (
    <View style={styles.main}>
      <Text style={styles.heading}>Signup</Text>
      <TextInput placeholder="Username" style={styles.inputField} />
      <TextInput placeholder="Password" style={styles.inputField} />
      <TextInput placeholder="Age" style={styles.inputField} />
      <TextInput placeholder="Address" style={styles.inputField} />
      <TextInput placeholder="State" style={styles.inputField} />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTxt}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginbtn} onPress={()=>navigation.navigate('Login')}><Text style={{color:'blue'}}>Login Page</Text></TouchableOpacity>
    </View>
  );
};

export default Signup;

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
  loginbtn:{
    marginTop:10
  },
});
