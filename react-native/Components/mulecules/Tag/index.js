import { FieldText } from "../../atoms";
import { TagContainer } from "./style";


export const Tag = ({item}) =>{
    const {title,color,marginTop,marginLeft} = item
    return(
        <TagContainer mt={marginTop} ml={marginLeft}>
         <FieldText fontFamily="semi_bold" size={14} mt={8} mb={8}color={color}>{title}</FieldText>
        </TagContainer>
    );
}
