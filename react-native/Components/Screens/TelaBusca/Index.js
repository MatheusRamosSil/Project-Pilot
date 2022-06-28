import { Container,Input} from '../../atoms';
import { BarApp} from '../../mulecules';
import { TagList,ListModules } from '../../organism';
import { useGetData } from "../../../services/hooks";
import React , { useEffect, useState } from 'react';
//import styles from './Style'


export default function Busca() {
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


  return (
    <Container align="flex-start" justify="flex-start">
      <BarApp item={{title:'Explore the World',mb:8}}/>
      <Input placeholder="Buscar"/>
      <TagList/>
      <ListModules data={news}/>
    </Container>
    
  );
}
