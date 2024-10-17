import Dexie from 'dexie'
import { useEffect, useState } from 'react'
import { View, TextInput, Button, Text, FlatList } from 'react-native'
import db from './database'

const DexieExample = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')  
    const [users, setUsers] = useState('')

    useEffect(() => {
        loadUsers()
    }, [])

    async function addUser() {
        if(!name ||!age) {
            alert('Por favor, preencha todos os campos.')
            return
        }
        await db.users.add({name, age: parseInt(age)})
        setName('')
        setAge('')
        loadUsers()
    }

    async function loadUsers() {
        const allUsers = await db.users.toArray()
        setUsers(allUsers)
    }

    return (
        <View>
            <TextInput
                placeholder='Nome'
                value={name}
                onChangeText={setName}
            />
            <TextInput
                placeholder='Idade'
                value={age}
                onChangeText={setAge}
            />
            <Button title='Adicionar' onPress={addUser} />
            <FlatList
                data={users}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({item}) => (
                    <Text>{item.name} - {item.age} anos</Text>
                )}
            />
        </View>
    )
}

export default DexieExample