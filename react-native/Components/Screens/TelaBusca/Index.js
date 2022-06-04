import React , { useState }from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './Style'


export default function Busca() {

  const [text,setText] = useState('')
  return (
    <View style={styles.container}>
      <View style = {styles.view}>
        <TextInput
          style={styles.input}
          placeholder='Pesquisar'
          autoCorrect={true}
          value={text}
          onChangeText={(value)=>setText(value)}
        />
        <Ionicons
          name="search"
          size={50}
          color="#000"
          onPress={ () => {/*acionar api*/}}
          />
      </View>
    </View>
  );
}

