import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function LoginScreen({navigation}) {

    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

    const handleLogin = async () => {
  console.log("Login button pressed");

  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }

  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log("Logged in user:", user);
    alert("Logged in successfully!");
    navigation.replace("Tabs");
  } catch (error) {
    console.log("Login error:", error);
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
    backgroundColor: '#FFF8F2',  // soft cream background
    justifyContent: 'center',
    paddingHorizontal: 25,
    paddingVertical: 10,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF914D',
    textAlign: 'center',
    marginBottom: 40,
  },

  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#FFD1A9',
    padding: 15,
    borderRadius: 12,
    marginTop: 12,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#FF914D',
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
    shadowColor: '#FF914D',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 3,
  },

  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },

  link: {
    marginTop: 18,
    textAlign: 'center',
    color: '#6CC4A1',
    fontSize: 15,
    fontWeight: '600',
  },
});
