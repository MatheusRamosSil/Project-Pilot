import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js</Text>
      <Image 
      style={styles.image}
      source={{
        uri: 'https://image.winudf.com/v2/image1/Y29tLmFqaW5mby53bG9zX3NjcmVlbl8wXzE2Mjk2OTEyMTNfMDg3/screen-0.jpg?fakeurl=1&type=.jpg',
      }}/>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 100,
    height:50,
  }
});
