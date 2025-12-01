import { useState } from "react";
import { View,Text,TextInput, TouchableOpacity } from "react-native";

export default  function LoginScreen({navigation}){
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');

        return(
            <View style = {Styles.container}>

                <Text style = {styles.title}>PawMatch Login</Text>

                <TextInput
                    styles={styles.input}
                    placeholder = "Email"
                    value = {email}
                    onChangeText={setEmail}>

                </TextInput>

                <TextInput
                    styles={styles.input}
                    placeholder = "Password"
                    value = {password}
                    onChangeText={setpassword}>

                </TextInput>

                <TouchableOpacity style = {styles.button}>
                    <text style={styles.buttonText}>Login</text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button}>
                    <text style={styles.buttonText}>Don't have an account yet? Sign up</text>
                </TouchableOpacity>
            </View>
    );
}

const stytles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        padding:20
    },
    title:{
        fontSize:28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom:40
    }
})