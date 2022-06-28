import { Card } from "../../mulecules";
import { FieldText } from "../../atoms";
import { ModuleContainer } from "./style";
import { Linking } from 'react-native';


export const Module = ({item}) =>{
    return(
        <ModuleContainer onPress={ ()=> Linking.openURL(item.url)}>
            <Card item={{image_url:item.urlToImage}}/>
            <FieldText fontFamily="semi_bold" mt={12} ml={24} mr={24} size={14} lh={20}
             >{item.title}</FieldText>
        </ModuleContainer>
    );
}
