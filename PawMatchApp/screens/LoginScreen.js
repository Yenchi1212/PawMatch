import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function LoginScreen({navigation}) {

    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

    const handleLogin = async() =>{
      if(!email||!password){
        alert("Please Enter email and password");
        return;
      }

      try{
        await signInWithEmailAndPassword(auth,email,password);
        alert("Logged in Sussesfully!");

        navigation.navigate("Signup");
      }
      catch(error){
        alert(error.message);
      }
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PawMatch Login </Text>

      <TextInput
      style = {styles.input}
      placeholder='Email'
      value={email}
      onChangeText={setEmail}
      />

      <TextInput
      style = {styles.input}
      placeholder='Password'
      secureTextEntry
      value={password}
      onChangeText={setPassword}
      />

      <TouchableOpacity style = {styles.button} onPress={handleLogin}>
        <Text style = {styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity  onPress={() => navigation.navigate("Signup")}>
        <Text style = {styles.link}>Dont't have an account? Sign up</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 15,
    borderRadius: 6,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#ff914d',
    padding: 15,
    borderRadius: 6,
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    marginTop: 15,
    textAlign: 'center',
    color: '#007bff',
  },
});
