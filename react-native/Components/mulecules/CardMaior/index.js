import { CardContainer, GradientComponent, CardImage } from "./style";
import React from "react";
import { Linking } from 'react-native';
import { colors } from "../../styles/colors";
import { FieldText } from '../../atoms';
import { theme } from "../../styles";

export const CardMaior = ({ item }) => {

    return (
        <CardContainer
            onPress={() => Linking.openURL(item.url)} >
            <CardImage source={{ uri: item.urlToImage }}>
                <GradientComponent colors={[colors.black, 'transparent', colors.black]}>
                    <FieldText  fontFamily="medium" size={16} mt={112} ml={12} color="white" >
                {item.title}</FieldText>
                </GradientComponent>
            </CardImage>

        </CardContainer>
    );
}