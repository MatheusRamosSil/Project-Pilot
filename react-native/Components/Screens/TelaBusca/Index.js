import { Container, Input } from '../../atoms';
import { BarApp } from '../../mulecules';
import { TagList, ListModules } from '../../organism';
import { useGetData } from "../../../services/hooks";
import React, { useEffect, useState } from 'react';
import { categoryNews } from '../../mulecules';

//import styles from './Style'


export default function Busca() {

  const { getNews,getCategory } = useGetData()
  const [news, setNews] = useState([])
  const [click, setClick] = useState(false)
  const [category, setCategory] = useState('')
  const [categoryNews, setCategoryNews] = useState([])

  const callGetData = async () => {
    const newsResponse = await getNews()

    if (!newsResponse.error) {
      setNews(newsResponse)

    }
  }

  const callGetNewsCategory = async (categoria) => {
    const newsResponse = await getCategory(categoria)
    
    if (!newsResponse.error) {
      setCategoryNews(newsResponse)
      setClick(false)
    }
  }

  
  useEffect(() => {

    if(click){
      callGetNewsCategory(category)
      console.log(click)
      console.log(category)
    }

    callGetData()
    
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [click])


  if (categoryNews.length > 0) {
    return (
      <Container align="flex-start" justify="flex-start">
        <BarApp item={{ title: 'Explore the World', mb: 8 }} />
        <Input placeholder="Buscar" />
        <TagList setClick={setClick} setCategory={setCategory}/>
        <ListModules data={categoryNews} />
      </Container>
    )

  }else if(news.length > 0  && !click){
    return (
      <Container align="flex-start" justify="flex-start">
        <BarApp item={{ title: 'Explore the World', mb: 8 }} />
        <Input placeholder="Buscar" />
        <TagList setClick={setClick} setCategory={setCategory}/>
        <ListModules data={news} />
      </Container>
    )
  }

  return (
    <Container align="flex-start" justify="flex-start">
      <BarApp item={{ title: 'Explore the World', mb: 8 }} />
      <Input placeholder="Buscar" />
      <TagList setClick={setClick} setCategory={setCategory} />
    </Container>

  );
}
