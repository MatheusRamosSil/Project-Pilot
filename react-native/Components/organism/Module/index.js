import { ContainerInLine} from "../../atoms";
import { Card } from "../../mulecules";
import { FieldText } from "../../atoms";
import { ModuleContainer } from "./style";

export const Module = ({item}) =>{
    const {title,color,image} = item
    return(
        <ModuleContainer>
            <Card item={{image_url:image}}/>
            <FieldText fontFamily="semi_bold" mt={12} ml={24} mr={24} size={14} lh={20}
            color={color}>{title}</FieldText>
        </ModuleContainer>
    );
}
