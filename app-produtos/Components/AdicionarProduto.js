import { useState } from "react"
import { View, TextInput, Text, StyleSheet  } from "react-native"
import db from "./db"

import BotaoCustomizado from "./Botoes"

export default function AdicionarProduto({navigation}){
    const [nome, setNome] = useState('')
    const [valor, setValor] = useState('')
    const [quantidade, setQuantidade] = useState('')

    async function adicionarProduto(){
        const total = valor * quantidade
        await db.produtos.add({nome, valor, quantidade, total})
        navigation.navigate('ListaDeProdutos')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Adicionar novo produto</Text>

            <TextInput style={styles.input} placeholder="Nome do produto" value={nome} onChangeText={setNome}/>
            <TextInput style={styles.input} placeholder="Valor" value={valor} onChangeText={setValor} keyboardType="numeric"/>
            <TextInput style={styles.input} placeholder="Quantidade" value={quantidade} onChangeText={setQuantidade} keyboardType="numeric"/>

            <BotaoCustomizado marginTop={40}onPress={adicionarProduto} title={"Adicionar produto"}/>
            <BotaoCustomizado marginTop={20} onPress={() => {navigation.navigate('ListaDeProdutos')}} title={"Cancelar"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    input: {
        marginBottom: 15,
        borderColor: '#E66337',
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 50,
        textAlign: 'center',
        color: '#5C1F0A'
    }
})