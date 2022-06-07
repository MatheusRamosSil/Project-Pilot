import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import imagem from '../../../Assests/david.png'


export default function App() {
  return (


    
      <View style={styles.container}>
          <View style={styles.novaview}>
                <Image style={styles.imagem} source={imagem}/> 
                <Text style={styles.texto}>David Lopez</Text>
                <Text style={styles.texto}>DavidLopezgp@unipe.com.br</Text>
          </View>
          <View style={styles.viewbotao}>
                <Pressable style={styles.botao}><Text style={styles.david}>profile</Text></Pressable>
                <Pressable style={styles.botao}><Text style={styles.david}>settings</Text></Pressable>
                <Pressable style={styles.botao}><Text style={styles.david}>logout</Text></Pressable>
                <Pressable style={styles.botao}><Text style={styles.david}>support</Text></Pressable>
          </View>      
      </View>

  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      title:{
        fontSize:38,
        fontFamily:'serif',
        textAlign:'left',
        textTransform:'uppercase',
      },
      botao:{
        width:300,
        height:50,
        backgroundColor:'#F68989',
        padding:10,
        margin:5,
        borderRadius:80,
        marginTop:5,
      },
      imagem:{
        width:100,
        height:100,
        borderRadius:100,
        marginBottom:40,
        alignItems:'center'
      },
      david:{
        textAlign:'center',
        backgroundColor:'#FFAB76',
      },
      novaview:{
        alignItems:'center',
        textAlign:'center',
        justifyContent:'start',
        marginBottom:80,
      },
      viewbotao:{
        marginTop:undefined,



      }


   
});