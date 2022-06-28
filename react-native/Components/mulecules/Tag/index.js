import { FieldText } from "../../atoms";
import { TagContainer } from "./style";
import { getNewsCategory } from "../../../services/hooks";
import React , { useEffect, useState } from 'react';



export const Tag = ({item}) =>{

    const {getNews} = getNewsCategory('business')
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

    const callNewsOfCategory =({item}) =>{
    
          if(item === 'Business'){
              console.log("é business")
          }    
         
      }
      
        return(
            <TagContainer mt={24} ml={14} onPress={ ()=> {
                callNewsOfCategory({item:item.title})
            } } >
            <FieldText fontFamily="semi_bold" size={14} mt={8} mb={8}color={'white'}>{item.title}</FieldText>
            </TagContainer>
        );

   
}
