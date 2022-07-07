import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import { FieldText } from '../../atoms/Text';
import { Container } from '../../atoms';
import { HomeList } from '../../organism';
import { React, useEffect, useState } from 'react'
import { BarApp } from '../../mulecules';
import { useGetData } from "../../../services/hooks";

export default function App() {
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
  }

  useEffect(() => {
    callGetData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
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
  );
}
