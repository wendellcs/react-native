import {useState} from 'react'
import {StyleSheet, View, Button, Text, TextInput} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AsyncStorageExample = () => {
    const [value, setValue] = useState('')
    const [storageValue, setStorageValue] = useState('')

    const storeData = async () => {
        try {
            await AsyncStorage.setItem('minhaChave', value)
        } catch (e) {
            console.error('Falha ao salvar os dados') 
        }
    }

    const getData = async() => {
        try {
            const data = await AsyncStorage.getItem('minhaChave')
            if (data){
                setStorageValue(data)
            }
        } catch (e){
            console.error('Falha ao recuperar os dados')
        }   
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Entre com um valor"
                onChangeText={setValue}
                value={value}
                style={{borderWidth: 1, marginBottom: 10}}
            />
            <Button title="Salvar Dado" onPress={storeData} />

            <Button style= {{marginTop: 10}} title="Retornar Dado" onPress={getData} />

            <Text>Dado retornado: {storageValue}</Text>
        </View>
    )
}

export default AsyncStorageExample


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f1f1',
      padding: 20
    }
  });
  