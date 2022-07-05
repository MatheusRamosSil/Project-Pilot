import { Container, Input } from '../../atoms';
import { BarApp } from '../../mulecules';
import { TagList, ListModules } from '../../organism';
import { useGetData } from "../../../services/hooks";
import React, { useEffect, useState } from 'react';



export default function Busca() {

  const { searchGetNews } = useGetData()
  const [news, setNews] = useState([])
  const [click, setClick] = useState(false)
  const [category, setCategory] = useState('')
  const [query, setQuery] = useState('')
  

  const callGetNews= async () => {
    const newsResponse = await searchGetNews('category',category)
    const result = await searchGetNews('search',query)

    if(!result.error) {
      setNews([])
      setNews(result)
      setClick(false)
     
    }

    if (!newsResponse.error ) {
      setNews([])
      setNews(newsResponse)
      setCategory('')
    }
  }


  
  
  useEffect(() => {

    if(click) {
      callGetNews()
    }

    else if(category.length > 0) {
      callGetNews()
    } 

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [click,query,category])

  return (
    <Container align="flex-start" justify="flex-start">
      <BarApp item={{ title: 'Explore the World', mb: 8 }} />
      <Input 
         onClick={setClick}
         clickVariable ={click}
          query={query}
          setQuery={setQuery}
          />
      <TagList setCategory={setCategory} />
      <ListModules data={news} />
    </Container>

  );
}
