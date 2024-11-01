import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import db from "./db";
import BotaoCustomizado from "./Botoes";

export default function ListaDeProdutos({navigation}){
    const [produtos, setProdutos] = useState('')

    useEffect(() => {
        carregarProdutos()
    }, [produtos])

    async function carregarProdutos(){
        const data = await db.produtos.toArray()
        setProdutos(data)
    }

    async function excluirProduto(id) {
        await db.produtos.delete(id)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nossos produtos</Text>

            <FlatList style={{height: 100}} data={produtos} keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <View style={styles.productView}>
                        <View>
                            <Text style={styles.text}>{item.nome}</Text>
                            <Text style={styles.text}>{item.valor} x {item.quantidade} = {item.total}</Text>
                        </View>

                        <View style={styles.btnView}>
                            <BotaoCustomizado title={"Editar"} onPress={() => navigation.navigate('EditarProduto', {id: item.id})} padding={5}/>
                            <BotaoCustomizado title={"Excluir"} onPress={() => {excluirProduto(item.id)}} padding={5} marginLeft={5}/>
                        </View>
                    </View>
                )}/>
            <View style={styles.addProductView}>
                <BotaoCustomizado title={"Adicionar produto"} onPress={() => navigation.navigate('AdicionarProduto')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        padding: 20
    },
    productView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderColor: '#E66337',
        paddingBottom: 20,
        paddingHorizontal: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 50,
        textAlign: 'center',
        color: '#5C1F0A'
    },
    text:{
        fontSize: 16,
        color: '#5C1F0A',
    },
    btnView: {
        marginLeft: 'auto',
        flexDirection: 'row'
    },
    addProductView: {
        height: 80,
        justifyContent: 'end'
    }
})