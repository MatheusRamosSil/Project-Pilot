import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import noticia from "../../Assests/logo.png"

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={noticia}/>
      <Text>Para compartilhar esse conteúdo, por favor utilize o link https://estudio.folha.uol.com.br/bradesco-vida-e-previdencia/2022/04/a-importancia-de-sermos-protagonistas-do-nosso-futuro.shtml ou as ferramentas oferecidas na página. Textos, fotos, artes e vídeos da Folha estão protegidos pela legislação brasileira sobre direito autoral. Não reproduza o conteúdo do jornal em qualquer meio de comunicação, eletrônico ou impresso, sem autorização da Folhapress (pesquisa@folhapress.com.br). As regras têm como objetivo proteger o investimento que a Folha faz na qualidade de seu jornalismo. Se precisa copiar trecho de texto da Folha para uso privado, por favor logue-se como assinante ou cadastrado.</Text>
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