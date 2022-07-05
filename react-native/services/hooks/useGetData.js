import { api } from "../api";

export const useGetData = () =>{
    const getNews = async () =>{
        try{
            const response = await api.get('/news/country/us')
            //console.log("news")
            //console.log({response})
            return response.data.articles
        }catch(error){
            console.log({error})
            return {error}
        }
    }

    const searchGetNews = async(urlPath,query) =>{
        try{
           
            const response = await api.get(`/news/${urlPath}/${query}`)
            //console.log("category")
            return response.data.articles
        }catch(error){
            console.log({error})
            return {error}
        }
    }


    return{
        getNews,
        searchGetNews,
    }
}