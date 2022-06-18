import { CardContainer, CardImage } from "./style";
import React from "react";


export const Card = ({item, ...props}) =>{

    const {image_url,wd,ht,radius} = item
    return(
        <CardContainer {...props}>
            <CardImage source={{uri:image_url}}/>
        </CardContainer>
    );
}