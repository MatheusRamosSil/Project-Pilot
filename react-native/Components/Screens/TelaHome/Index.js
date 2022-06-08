import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView ,ScrollView} from 'react-native';

import styles from './Style'
import Header from '../../Header/Header'
import Carrossel from '../../Carrossel/Carrossel'
import SegundoCarrossel from '../../CarrosselMenor/CarrosselMenor'

import {FieldText} from '../../atoms/Text';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header/>
        <FieldText fontFamily="semi_bold" size={28} mt={8}>Noticias Destaques</FieldText>
        <Carrossel/>
        <FieldText fontFamily="semi_bold" size={28} mt={8}>Últimas Noticias</FieldText>
        <SegundoCarrossel/>
        <FieldText fontFamily="semi_bold" size={28} mt={8}>Moda</FieldText>
        <SegundoCarrossel/>
        <FieldText fontFamily="semi_bold" size={28} mt={8}>esporte</FieldText>
        <SegundoCarrossel/>
      </ScrollView>

      <StatusBar style="light" backgroundColor='grey' hidden={false} translucent={true}/>
    </SafeAreaView>
  );
}
