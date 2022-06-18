import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView ,ScrollView} from 'react-native';

import styles from './Style'
import Header from '../../Header/Header'
import Carrossel from '../../Carrossel/Carrossel'
import SegundoCarrossel from '../../CarrosselMenor/CarrosselMenor'

import {FieldText} from '../../atoms/Text';
import { Title } from '../../organism';

import { Container } from '../../atoms';
import { HomeList } from '../../organism';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header/>
        <Container flex-direction='column' >
        <FieldText fontFamily="semi_bold" size={28} mt={18} ml={12} mb={18}
        >Noticias Destaques</FieldText>
          <HomeList/>
          <FieldText fontFamily="semi_bold" size={28} mt={18} ml={12} mb={18}>Últimas Noticias</FieldText>
          <HomeList/>
          <FieldText fontFamily="semi_bold" size={28} mt={18} ml={12} mb={18}>Moda</FieldText>
          <HomeList/>
          <FieldText fontFamily="semi_bold" size={28} mt={18} ml={12} mb={18}>esporte</FieldText>
          <HomeList/>
        </Container>
      </ScrollView>

      <StatusBar style="light" backgroundColor='grey' hidden={false} translucent={true}/>
    </SafeAreaView>
  );
}
