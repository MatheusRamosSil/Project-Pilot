import React , { useEffect, useState } from 'react'
import { Container} from '../../atoms';
import { BarApp} from '../../mulecules';
import { FieldText } from '../../atoms';
import {ListCardModules} from '../../organism';
import { SafeAreaView ,ScrollView} from 'react-native';
import { useGetData } from "../../../services/hooks";

export default function App() {

  const {getNews} = useGetData()
  const [loading,setLoading] = useState(true)
  const [news, setNews] = useState([])

  

  const callGetData = async () =>{
      const newsResponse = await getNews()
    
      if(!newsResponse.error){
          setNews(newsResponse)
         
      }
  }

  useEffect(()=>{
      callGetData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  console.log({news})
  return (
    <SafeAreaView>
       <ScrollView> 
          <Container align="flex-start" justify="flex-start">
              <BarApp item={{title:'Banca'}}/>
              <FieldText fontFamily="medium" size={14} mt={0} ml={18} mb={0}
                >Noticias dos principais jornais</FieldText>
              <ListCardModules data={news}/>
          </Container>
       </ScrollView>
    </SafeAreaView>
  );
}
