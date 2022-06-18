import { Card } from "../../mulecules";
import { FieldText } from "../../atoms";
import { ModuleContainer } from "./style";
import { Linking } from 'react-native';

const onClickLink = ({url}) =>{
    Linking.openURL(url);
}

export const Module = ({item}) =>{
    const {title,color,image,url} = item
    return(
        <ModuleContainer onPress={ ()=> onClickLink({url})}>
            <Card item={{image_url:image}}/>
            <FieldText fontFamily="semi_bold" mt={12} ml={24} mr={24} size={14} lh={20}
            color={color}>{title}</FieldText>
        </ModuleContainer>
    );
}
