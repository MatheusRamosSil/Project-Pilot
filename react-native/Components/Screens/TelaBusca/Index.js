import React , { useState }from 'react';
import { StyleSheet, TextInput, View, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Container,Input } from '../../atoms';
import { BarApp, Tag } from '../../mulecules';
//import styles from './Style'


export default function Busca() {

  const [text,setText] = useState('')
  return (
    <Container align="flex-start" justify="flex-start">
      <BarApp item={{title:'Explore the World'}}/>
      <Input/>
      <Tag mt={24} ml={14}>World</Tag>
    </Container>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
