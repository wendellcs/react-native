import { useEffect, useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import db from "./db";

export default function ListaDeProdutos({navigation}){

    const [produtos, setProdutos] = useState('')

    useEffect(() => {
        carregarProdutos()
    }, [])

    async function carregarProdutos(){
        const data = await db.produtos.toArray()

        setProdutos(data)
    }

    async function excluirProduto(item) {
        
    }

    return (
        <View>
            <FlatList data={produtos} keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <View>
                        <Text>{item.nome} - {item.valor} x {item.quantidade} = {item.total}</Text>
                        
                        <Button title="Editar" onPress={() => {}}/>
                        <Button title="Excluir" onPress={() => excluirProduto(item.id)}/>
                    </View>
                )}/>
        </View>
    )
}