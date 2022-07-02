import { CardContainer, CardImage } from "./style";
import React from "react";


export const CardMaior = ({item}) =>{
    return(
        <CardContainer>
            <CardImage source={{uri: item.urlToImage}}/>
        </CardContainer>
    );
}