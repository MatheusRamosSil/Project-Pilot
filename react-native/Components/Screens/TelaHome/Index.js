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

import {React ,useEffect , useState} from 'react'
import { useGetData } from "../../../services/hooks";

export default function App() {
  const {getNews} = useGetData()
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)


  console.log({
    loading,
    news
  })
  const callGetData = async () =>{
      const newsResponse = await getNews()
    
      if(!newsResponse.error){
          setNews(newsResponse)
          setLoading(false)
         
      }
  }

  useEffect(()=>{
      callGetData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <SafeAreaView>
      <ScrollView>
        <Header/>
        <Container flex-direction='column' >
        <FieldText fontFamily="semi_bold" size={28} mt={18} ml={12} mb={18}
        >Noticias Destaques</FieldText>
          <HomeList data={news}/>
          <FieldText fontFamily="semi_bold" size={28} mt={18} ml={12} mb={18}>Últimas Noticias</FieldText>
          <HomeList data={news}/>
          <FieldText fontFamily="semi_bold" size={28} mt={18} ml={12} mb={18}>Moda</FieldText>
          <HomeList data={news}/>
          <FieldText fontFamily="semi_bold" size={28} mt={18} ml={12} mb={18}>esporte</FieldText>
          <HomeList data={news}/>
        </Container>
      </ScrollView>
      <StatusBar style="light" backgroundColor='grey' hidden={false} translucent={true}/>
    </SafeAreaView>
  );
}
