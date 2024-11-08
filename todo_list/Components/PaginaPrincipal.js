import {View, Text, Button, StyleSheet} from 'react-native'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import BotaoCustomizado from './Botao'
import { useEffect, useState } from 'react'
import db from './bancoDados'

export default function Home(){
    const [tarefa, setTarefa] = useState('')
    const [listaTarefas, setListaTarefas] = useState('')

    const [listaTarefasConcluidas, setListaTarefasConcluidas] = useState('')

    useEffect(() => {
        carregarTarefas()
    }, [])

    async function carregarTarefas(){
        const data = await db.tarefas.toArray()
        setListaTarefas(data)
        console.log(data)
    }

    async function adicionarTarefa(){
        await db.tarefas.add({tarefa, completed: false})
        setTarefa('')
        carregarTarefas()
    }

    async function concluirTarefa(id) {
        let status = listaTarefas.find(item => item.id == id).completed
        await db.tarefas.update(id, {completed: !status})
    }

    async function excluirTarefa(id) {
        await db.tarefas.delete(id)
        carregarTarefas()
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Lista de Tarefas</Text>

                <View style={styles.addTaskContainer}>
                    <TextInput placeholder='Ex: Comprar coca-cola' value={tarefa} onChangeText={setTarefa} style={styles.input}/>
                    <BotaoCustomizado onPress={adicionarTarefa} title={'+'} padding={12}/>
                </View>

                <FlatList data={listaTarefas}  keyExtractor={(item) => item.id.toString()} renderItem={({item}) => (
                    <View style={styles.taskContainer}>
                        <Text style={{fontSize: 18, marginRight: 10}}>{item.tarefa}</Text>
                        <View style={styles.buttonContainer}>
                            <BotaoCustomizado title={'Done'} onPress={() => concluirTarefa(item.id)} padding={5}/>
                            <BotaoCustomizado title={'X'} onPress={() => {excluirTarefa(item.id)}} padding={10}/>
                        </View>
                    </View>
                )}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        padding: 20,
        width: 350,
        backgroundColor: '#FFF',
        alignItems: 'center',
        borderRadius: 15
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#3F334D',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    addTaskContainer: {
        marginBottom: 30,
        paddingLeft: 10,
        backgroundColor: '#E6E6E6',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#3F334D'
    },
    taskContainer: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#3F334D',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonContainer: {
        marginLeft: 'auto',
        flexDirection: 'row',
        justifyContent:'space-between',
        gap: 5
    },
    input: {
        height: 30,
        outlineWidth: 0,
        padding: 5
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3F334D',
        marginTop: 30,
        marginBottom: 20
    }
})