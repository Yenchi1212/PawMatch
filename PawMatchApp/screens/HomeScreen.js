import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';
import { Alert } from 'react-native';

import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default function HomeScreen({navigation}){

    const handleLogout = async () => {
        await signOut(auth);
        Alert.alert("Logged out!");
        navigation.replace("Login");
    };

    return (
        <View style = {styles.container}>
            <Text style = {styles.button}>Welcome to PawMatch!</Text>
            <Text style = {styles.subtitle}>You are logged in.</Text>

            <TouchableOpacity style ={styles.button} onPress={handleLogout}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#ff914d",
    padding: 15,
    borderRadius: 6,
    width: "60%",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});