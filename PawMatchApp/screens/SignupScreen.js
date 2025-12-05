import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


export default function SignupScreen({navigation}) {
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create your Account </Text>

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

      <TouchableOpacity 
        style = {styles.button}
        onPress={async()=>{
          if(!email || !password){
            alert("Please enter your email and password");
            return;
          }
          try{
            //create user in firebase
            await createUserWithEmailAndPassword(auth,email,password);
            alert("Account created successfully");
            navigation.navigate("Login");
          }
          catch(error){
            alert(error.message);
          }
        }}
      >
        <Text style = {styles.buttonText}>Sign Up</Text>

      </TouchableOpacity>

      <TouchableOpacity  onPress={() => navigation.navigate("Login")}>
        <Text style = {styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding:20,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },

  input:{
    borderWidth:1,
    borderColor:'#aaa',
    padding:15,
    borderRadius:6,
    marginTop:10,
  },
  button: {
    backgroundColor: '#ff914d',
    padding: 15,
    borderRadius: 6,
    marginTop:10
  },
  buttonText: {
    textAlign:'justify',
    color:'white',
    fontWeight: 'bold',
    fontSize:16,
  },
  link: {
    marginTop:15,
    textAlign:'center',
    color:'#007bff'
  }
});
