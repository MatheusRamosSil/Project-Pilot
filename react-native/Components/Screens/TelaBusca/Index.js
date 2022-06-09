import React , { useState }from 'react';
import { StyleSheet, TextInput, View, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Container,Input} from '../../atoms';
import { BarApp} from '../../mulecules';
import { TagList,ListModules } from '../../organism';


//import styles from './Style'


export default function Busca() {

  const [text,setText] = useState('')
  return (
    <Container align="flex-start" justify="flex-start">
      <BarApp item={{title:'Explore the World'}}/>
      <Input/>
      <TagList/>
      <ListModules/>
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
