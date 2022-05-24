import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style';

export default function TelaHome() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js </Text>
        <Image 
        style={styles.image}
        source={{
          uri: 'https://image.winudf.com/v2/image1/Y29tLmFqaW5mby53bG9zX3NjcmVlbl8wXzE2Mjk2OTEyMTNfMDg3/screen-0.jpg?fakeurl=1&type=.jpg',
        }}/>   
        <Text> DWP Modificando</Text>
      </View>
    );
  }