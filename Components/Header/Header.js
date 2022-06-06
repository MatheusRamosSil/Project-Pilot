import React from 'react';
import { View , Image} from 'react-native';

import Logo from '../../Assets/logo.png'
import styles from './Style';

export default function Header() {
  return (
      <View style = {styles.header}>
        <Image style = {styles.logo} source = {Logo}/>
      </View>
  );
}
