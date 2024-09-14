import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native-web";
import { useState } from "react";

export default function LoginScreen({navigation}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(){
        if( !email.trim() || !password) {
            Alert.alert('Erro', 'O campo está vazio')
        } else {
            navigation.navigate('TelaInicial', {email})
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Email:</Text> 

            <TextInput style={styles.input}
                placeholder = 'Digite seu email'
                value = {email}
                onChangeText = {setEmail}
            />

            <Text style={styles.label}>Senha: </Text> 

            <TextInput style={styles.input}
                placeholder = '********'
                value = {password}
                onChangeText = {setPassword}
            />

            <Button title = 'Login' onPress={handleLogin}></Button>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontSize: 16,
        marginBottom: 10
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginBottom: 16,
        borderRadius: 4,
    }
})