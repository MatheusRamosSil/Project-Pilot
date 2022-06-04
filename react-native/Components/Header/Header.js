import React from 'react';
import { View , Image, Pressable} from 'react-native';

import Logo from '../../Assets/logo.png'
import styles from './Style';

export default function Header() {
  return (
      <View style = {styles.header}>
        <Pressable style = {styles.card}>
          <Image style = {styles.logo} source = {Logo}/>
        </Pressable>
      </View>
  );
}
