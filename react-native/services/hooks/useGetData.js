import { api } from "../api";

export const getNewsCategory = (category) =>{
    const getCategory = async () =>{
        try{
            const response = await api.get('/news/category/'+category)
            console.log("news category")
            //console.log({response})
            return response.data.articles
        }catch(error){
            console.log({error})
            return {error}
        }
    }
    return getCategory
}

export const useGetData = () =>{
    const getNews = async () =>{
        try{
            const response = await api.get('/news')
            console.log("oi")
            //console.log({response})
            return response.data.articles
        }catch(error){
            console.log({error})
            return {error}
        }
    }

    const getCategory = async(query) =>{
        try{
            const response = await api.get(`/news/category/${query}`)
            console.log("oi")
            //console.log({response})
            return response.data.articles
        }catch(error){
            console.log({error})
            return {error}
        }
    }


    return{
        getNews,
    }
}