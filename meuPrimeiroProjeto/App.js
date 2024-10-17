import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, TextInput, TouchableOpacity } from 'react-native-web';

export default function App() {
  const [showMessage, setShowMessage] = useState(false)

  return (
    <View style={styles.container}>
      <View style= {styles.content}>

      <Text style = {styles.title}>
        Olá, me chamo Wendell!
      </Text>
      
      <Text style = {styles.text}>
        Desenvolvedor Front-End 
      </Text>

      <Text style = {styles.text_techs}>
        Essas são algumas das tecnologias que domino
      </Text>
    
      <View style = {styles.techs}>
        <Image 
        source = {{uri: 'https://cdn-icons-png.flaticon.com/512/174/174854.png'}}
        style = {{width: 32, height: 32}}
        />
        <Image 
        source = {{uri: 'https://cdn-icons-png.flaticon.com/512/732/732190.png'}}
        style = {{width: 32, height: 32}}
        />
        <Image 
        source = {{uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png'}}
        style = {{width: 32, height: 32}}
        />
        </View>

      <Button title = 'Curiosidade' style={styles.btn} onPress = {() => showMessage ? setShowMessage(false) : setShowMessage(true)}/>
      {
         showMessage && <Text style ={styles.text}>Mais um fã de One Piece</Text>
      }
      </View>
    </View>
  );
}

{/* 
  <Text> Conteúdo <Text/> - É semelhante ao P do HTML.
  
  <View> Conteúdo <View/> - É semelhante à DIV do HTML.
*/}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1f21',
    paddingTop: 40,
    flex: 1
  },
  content: {
    alignItems: 'center',
  },

  techs: {
    marginTop: 30,
    marginBottom: 50,
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    margin: 10,
    fontSize: 16,
    color: '#ffffff',
  },

  text_techs: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  btn: {
    width: 80,
    height: 40,
    backgroundColor: 'red',
    borderRadius: 5,
  }
});
