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
  const {getNews , searchGetNews} = useGetData()
  const [news, setNews] = useState([])
  const [br, setBR] = useState([])
  const [ua, setUA] = useState([])
  const [jp, setJP] = useState([])
  const [loading, setLoading] = useState(true)

   const callGetData = async () =>{
      const newsResponse = await getNews()
      const brResponse = await searchGetNews('country','br')
      const uaResponse = await searchGetNews('country','ua')
      const jpResponse = await searchGetNews('country','jp')
    
      if(!newsResponse.error && !brResponse.error && !uaResponse.error && !jpResponse.error){
          setNews(newsResponse)
          setBR(brResponse)
          setUA(uaResponse)
          setJP(jpResponse)
          setLoading(false)
         
      }
  }

  useEffect(()=>{
      callGetData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <SafeAreaView>
      <Container flex-direction='column' >
        <ScrollView>
          <Header/>
          
          <FieldText fontFamily="semi_bold" size={28} mt={18} ml={12} mb={18}
          >Notícias Norte Americanas</FieldText>
            <HomeList data={news}/>
            <FieldText fontFamily="semi_bold" size={28} mt={18} ml={12} mb={18}>Notícias do Brasil</FieldText>
            <HomeList data={br}/>
            <FieldText fontFamily="semi_bold" size={28} mt={18} ml={12} mb={18}>Notícias Ucranianas</FieldText>
            <HomeList data={ua}/>
            <FieldText fontFamily="semi_bold" size={28} mt={18} ml={12} mb={18}>Notícias Japonesas</FieldText>
            <HomeList data={jp} />
          
        </ScrollView>
      </Container>
      <StatusBar style="light" backgroundColor='grey' hidden={false} translucent={true}/>
    </SafeAreaView>
  );
}
