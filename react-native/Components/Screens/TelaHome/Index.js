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

const dados = [
  {
      id:0,
      image_url: 'https://cdn.pixabay.com/photo/2017/07/05/11/45/neymar-2474376__340.jpg',
  },
  {
      id:1,
      image_url: 'https://media.istockphoto.com/photos/soccer-players-celebrating-a-goal-picture-id1310476262?b=1&k=20&m=1310476262&s=170667a&w=0&h=qAsN7Ukm_8Tn5WBXmR6BdckPYmZ-3KDuTovC1kTL474=',
  },
  {
      id:2,
      image_url: 'https://cdn.pixabay.com/photo/2020/03/08/12/02/fcbarcelona-4912292__340.jpg',
  },
  {
      id:3,
      image_url: 'https://cdn.pixabay.com/photo/2017/07/04/21/18/neymar-2472682__340.jpg',
  },
]
export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header/>
        <Container flex-direction='column' >
        <FieldText fontFamily="semi_bold" size={28} mt={18} ml={12} mb={18}
        >Noticias Destaques</FieldText>
          <HomeList data = {dados}/>
          <FieldText fontFamily="semi_bold" size={28} mt={18} ml={12} mb={18}>Últimas Noticias</FieldText>
          <HomeList data = {dados}/>
          <FieldText fontFamily="semi_bold" size={28} mt={18} ml={12} mb={18}>Moda</FieldText>
          <HomeList data = {dados}/>
          <FieldText fontFamily="semi_bold" size={28} mt={18} ml={12} mb={18}>esporte</FieldText>
          <HomeList data = {dados}/>
        </Container>
      </ScrollView>

      <StatusBar style="light" backgroundColor='grey' hidden={false} translucent={true}/>
    </SafeAreaView>
  );
}
