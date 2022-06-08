import { FieldText } from "../../atoms";
import { TagContainer } from "./style";

export const Tag = ({children, ...props}) =>{
    return(
        <TagContainer {...props}>
         <FieldText fontFamily="semi_bold" size={14}>{children}</FieldText>
        </TagContainer>
    );
    
}