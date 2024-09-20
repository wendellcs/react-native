import { View, Text, TextInput, TouchableOpacity } from "react-native-web";
import { useState } from "react";
import { styles } from "./styles";

export default function LoginScreen({navigation}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    function handleLogin(){
        if(verifyLogin()){
            navigation.navigate('TelaInicial', {email})
            alert('Seja bem-vindo')

            setEmail('')
            setPassword('')
            setLoading(false)
        }
    }

    function verifyLogin(){
        setEmailError(false)
        setPasswordError(false)

        let emailErrorState = false
        let passwordErrorState = false 

        if(!email.trim()) {
            emailErrorState = true
        } 

        if (password.length < 6 || !password){
            passwordErrorState = true
        }

        if( emailErrorState && passwordErrorState){
            setEmailError(true)
            setPasswordError(true)
            alert('Os dados inseridos não parecem corretos...')
            return false

        } else if ( emailErrorState ){
            setEmailError(true)
            alert('O campo de email está vazio.')
            return false

        } else if (passwordErrorState){
            setPasswordError(true)
            alert('A senha deve conter pelo menos 6 caracteres.')
            return false
        } 

        return true
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Faça login</Text> 
                </View>

                <Text style={styles.label}>Email:</Text> 

                <TextInput style={!emailError ? styles.input: [styles.input, styles.inputError]}
                    placeholder = 'Digite seu email'
                    value = {email}
                    onChangeText = {setEmail}
                    placeholderTextColor={ !emailError ? 'rgba(255, 255, 255, 0.6)' : 'rgba(250, 0, 0, 0.4)'}
                    />

                <Text style={styles.label}>Senha: </Text> 

                <TextInput style={!passwordError ? styles.input: [styles.input, styles.inputError]}
                    placeholder = '********'
                    value = {password}
                    onChangeText = {setPassword}
                    placeholderTextColor={ !passwordError ? 'rgba(255, 255, 255, 0.6)' : 'rgba(250, 0, 0, 0.4)'}
                    />

                <TouchableOpacity style={styles.btn} onPress={handleLogin}>
                    <Text style={styles.btnText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}