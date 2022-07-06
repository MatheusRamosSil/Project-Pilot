import { CardContainer, CardImage } from "./style";
import React from "react";
import { Linking } from 'react-native'

export const CardMaior = ({item}) =>{
    return(
        <CardContainer onPress={ ()=> Linking.openURL(item.url)}>
            <CardImage source={{uri: item.urlToImage}}/>
        </CardContainer>
    );
}