import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <View style = {styles.container}>
          <Text styles = {styles.title}> essa e a tela de perfil</Text>
      </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      title:{
        fontSize:38,
        fontFamily:'serif',
        textAlign:'left',
        textTransform:'uppercase',
      },
   
});