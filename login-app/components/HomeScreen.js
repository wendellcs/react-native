import React from "react";
import { View, Text, Button } from "react-native-web";

export default function HomeScreen({navigation}){
    return(
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Seja bem-vindo a tela inicial!</Text>
            <Button title = 'Perfil' onPress = {() => navigation.navigate('Profile')}> </Button>
        </View>
    )
}