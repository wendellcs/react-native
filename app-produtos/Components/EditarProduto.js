import { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, Text} from "react-native-web";
import BotaoCustomizado from "./Botoes";
import db from "./db";

export default function EditarProduto({route, navigation}){
    const { id } = route.params

    const [produto, setProduto] = useState('')

    const [nome, setNome] = useState('')
    const [valor, setValor] = useState('')
    const [quantidade, setQuantidade] = useState('')

    useEffect(() => {
        pegarProduto()
    }, [])

    async function pegarProduto() {
        const data = await db.produtos.get(id)

        setProduto(data)
    }

    async function atualizarProduto(){
        const total = quantidade * valor 
        await db.produtos.update(id, {
            nome: nome || produto.nome, 
            valor: valor || produto.valor, 
            quantidade: quantidade || produto.quantidade,
            total: total || produto.total
        })

        navigation.navigate('ListaDeProdutos')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Atualizando o produto</Text>
            <TextInput style={styles.input} placeholder={produto.nome} value={nome} onChangeText={setNome}/>
            <TextInput style={styles.input} placeholder={produto.valor} value={valor} onChangeText={setValor} keyboardType="numeric"/>
            <TextInput style={styles.input} placeholder={produto.quantidade} value={quantidade} onChangeText={setQuantidade} keyboardType="numeric"/>
            
            <BotaoCustomizado marginTop={30} title={"Atualizar produto"} onPress={atualizarProduto}/>
            <BotaoCustomizado marginTop={15} title={"Cancelar"} onPress={() => navigation.navigate('ListaDeProdutos')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        padding: 20
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