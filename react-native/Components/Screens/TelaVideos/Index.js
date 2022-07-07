import React, { useEffect, useState } from 'react'
import { Container } from '../../atoms';
import { BarApp } from '../../mulecules';
import { FieldText } from '../../atoms';
import { ListCardModules } from '../../organism';
import { SafeAreaView, ScrollView } from 'react-native';
import { useGetData } from "../../../services/hooks";

export default function App() {

  const { searchGetNews } = useGetData()
  const [news, setNews] = useState([])
  const [news2, setNews2] = useState([])
  const [news3, setNews3] = useState([])



  const callGetData = async () => {
    const newsResponse = await searchGetNews('search', 'cnn')
    const resltNews2 = await searchGetNews('search', 'google')
    const resltNews3 = await searchGetNews('search', 'bbc')

    if (!newsResponse.error && !resltNews2.error && !resltNews3.error) {
      setNews(newsResponse)
      setNews2(resltNews2)
      setNews3(resltNews3)
    }
  }

  useEffect(() => {
    callGetData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log({news2})
  return (
    <SafeAreaView>
      <ScrollView>
        <Container align="flex-start" justify="flex-start">
          <BarApp item={{ title: 'Banca' }} />
          <FieldText fontFamily="medium" size={14} ml={18}  align={"center"}
          >Noticias dos principais jornais</FieldText>
          <ScrollView
            horizontal
          >
            <ListCardModules data={news} newsName="CNN" />
            <ListCardModules data={news2} newsName="Google news" />
            <ListCardModules data={news3} newsName="BBC News" />
          </ScrollView>

        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
