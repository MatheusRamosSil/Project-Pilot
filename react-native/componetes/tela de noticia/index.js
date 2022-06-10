import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import noticia from "../../Assests/imagemdenoticia.webp"
import style from './style';
import styles from "./style"

export default function App() {
  return (
    <View style= {styles.container}>
      <Text style= {styles.titulog}>Site de Noticia </Text>
      <Image source={noticia} style= {styles.Image} />
      <Text style= {style.texto} >Para compartilhar esse conteúdo, por favor uti ou as ferramentas oferecidas na página. Textos, fotos, artes e vídeos da Folha estão protegidos pela legislação brasileira sobre direito autoral. Não reproduza o conteúdo do jornal em qualquer meio de comunicação, eletrônico ou impresso, sem autorização da Folhapress . As regras têm como objetivo proteger o investimento que a Folha faz na qualidade de seu jornalismo. Se precisa copiar trecho de texto da Folha para uso privado, por favor logue-se como assinante ou cadastrado.</Text>
     
    </View>
  );
}


