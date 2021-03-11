import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Slider from '@react-native-community/slider';

export default function App(){
  const [password, setPassword] = useState('000000');
  //Cria um array e passa dois parâmetros, nome do estado e a função pra trocar o valor desse estado.
  //Dentro do parênteses é o valor que esse estado vai começar

  function generatePass() {
    alert('Clicou no botão')
  }


  return(
    <View style={styles.container}>
      <Image
      source={require('./src/assets/logo.png')}
      style={styles.logo}
      />

      <Text style={styles.title}>12 Caracteres</Text>
      <View style={styles.area}>
        <Slider
           style={{ height: 50 }}
           minimumValue={5}
           maximumValue={15}
           minimumTrackTintColor="#FF0000"
           maximumTrackTintColor="#000"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePass}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      <View style={styles.area}>
        <Text style={styles.password}>{password}</Text>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
  flex:1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#F3F3FF'
  
  },
  logo:{
    marginBottom: 60
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold'
  },
  area:{
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#FFF',
    width: '80%',
    borderRadius: 7
  },
  button:{
    backgroundColor: '#FFA200',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginBottom: 25,
  },
  buttonText:{
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold'
  },
  password:{
    padding: 10,
    textAlign: 'center',
    fontSize: 20
  }
});