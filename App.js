import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App(){
  return(
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>Meu primeiro App com React-Native</Text>
      <Text>@rafaellucasdesenvolvedorweb</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    marginTop: 100
  }
})