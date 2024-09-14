import React from "react";
import { View, Text, Button } from "react-native-web";

export default function ProfileScreen({navigation}){
    return(
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Seja bem-vindo a tela de perfil!</Text>
            <Button onPress = {() => navigation.goBack()} title = 'Voltar'> </Button> 
        </View>
    )
}