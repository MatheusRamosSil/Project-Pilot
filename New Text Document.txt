import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView, Linking, TouchableHighlight } from 'react-native';

export default function App() { 
  return (
      
      <SafeAreaView>
        <StatusBar/>

        <View style={styles.container}>
          <View style={styles.quadradoA}>
            <TouchableHighlight onPress={() => Linking.openURL('https://www.uol.com.br/eleicoes/2022/06/07/ciro-entrevista-flow-lula.htm')}>
              <Image source={{uri: 'https://conteudo.imguol.com.br/c/noticias/9a/2022/06/07/ciro-gomes-em-entrevista-ao-podcast-flow-1654604426603_v2_450x600.jpg.webp'}} style={ styles.img }  />
            </TouchableHighlight>
          </View>
          <View style={styles.quadradoB}>
            <Text style={styles.hyperlinkStyle} onPress={() => { Linking.openURL('https://www.uol.com.br/eleicoes/2022/06/07/ciro-entrevista-flow-lula.htm'); }}> 
              Brasil vai 'amanhecer' em guerra se Lula for eleito, diz Ciro Gomes 
            </Text> 
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.quadradoA}>
            <TouchableHighlight onPress={() => Linking.openURL('https://www.climatempo.com.br/noticia/2022/06/07/chuva-e-destaque-no-mt-e-ms-no-decorrer-da-semana-5737')}>
              <Image source={ { uri: 'https://imagens.climatempo.com.br/climapress/galeria/2022/06/515x380_aa81d13096f8015091d5e9b5b4d42668.jpg'} } style={ styles.img }/>
            </TouchableHighlight>
          </View>
          <View style={styles.quadradoB}>
            <Text style={styles.hyperlinkStyle} onPress={() => { Linking.openURL('https://www.climatempo.com.br/noticia/2022/06/07/chuva-e-destaque-no-mt-e-ms-no-decorrer-da-semana-5737'); }}> 
              Chuva é destaque no MT e MS no decorrer da semana
            </Text> 
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.quadradoA}>
            <TouchableHighlight onPress={() => Linking.openURL('https://www.climatempo.com.br/noticia/2022/06/07/financiamento-agricola-devera-ser-robusto-5741')}>
              <Image source={ { uri: 'https://imagens.climatempo.com.br/climapress/galeria/2022/06/410x300_bfe17379b2396d3b6f7200b037c59ac3.jpg'} }style={ styles.img }/>
            </TouchableHighlight>
          </View>
          <View style={styles.quadradoB}>
            <Text style={styles.hyperlinkStyle} onPress={() => { Linking.openURL('https://www.climatempo.com.br/noticia/2022/06/07/financiamento-agricola-devera-ser-robusto-5741'); }}> 
              Financiamento agrícola deverá ser robusto
            </Text> 
          </View>
        </View>

      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 0,
    justifyContent: "space-between",
    flexDirection: "row",
    },
    title:{
      fontSize:21,
      color:'red',
    },
    img: {
    width: 100,
    height: 100
  },
  quadradoA: {
  backgroundColor: "green",
  flex: 0,
  width: 100,
  height: 100
  },
  quadradoB: {
    backgroundColor: "white",
    width: 100,
    flex: 2,
    height: 100
  },
});