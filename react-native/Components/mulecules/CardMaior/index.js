import { CardContainer, CardImage } from "./style";
import React from "react";
import { useNavigation } from "@react-navigation/native";


export const CardMaior = ({item}) =>{
    const navigation = useNavigation();
    return(
        <CardContainer onPress={()=> navigation.navigate('Noticia')}>
            <CardImage source={{uri: item.image_url}}/>
        </CardContainer>
    );
}