import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import { FieldText } from '../../atoms/Text';
import { Container } from '../../atoms';
import { HomeList } from '../../organism';
import { React, useEffect, useState } from 'react'
import { BarApp } from '../../mulecules';
import { useGetData } from "../../../services/hooks";

export default function App() {
<<<<<<< HEAD
  const { getNews, searchGetNews } = useGetData()
  const [news, setNews] = useState([])
  const [news2, setNews2] = useState([])
  const [news3, setNews3] = useState([])
  const [loading, setLoading] = useState(true)



  console.log({
    loading,
    news
  })
  const callGetData = async () => {
    const newsResponse = await getNews()
    const resltNews2 = await searchGetNews('category', 'sports')
    const resltNews3 = await searchGetNews('category', 'business')

    if (!newsResponse.error && !resltNews2.error && !resltNews3.error) {
      setNews(newsResponse)
      setNews2(resltNews2)
      setNews3(resltNews3)
      setLoading(false)

    }
=======
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
>>>>>>> 3b7ec1bfad7f8aa8e3cf4fc661e2d62cdd30c290
  }

  useEffect(() => {
    callGetData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
<<<<<<< HEAD
    <Container align="flex-start" justify="flex-start">

      <ScrollView>
        <BarApp item={{ title: 'Noticias Destaques' }} />
        <HomeList data={news} />
        <FieldText fontFamily="medium" size={28} mt={60} ml={24} >Negócios</FieldText>
        <HomeList data={news3} />
        <FieldText fontFamily="medium" size={28} mt={60} ml={24} >Esporte</FieldText>
        <HomeList data={news2} />
      </ScrollView>
      <StatusBar style="light" backgroundColor='grey' hidden={false} translucent={true} />
    </Container>
=======
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
>>>>>>> 3b7ec1bfad7f8aa8e3cf4fc661e2d62cdd30c290
  );
}
