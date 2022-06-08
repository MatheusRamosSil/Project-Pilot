import { FieldText } from "../../atoms";
import { TagContainer } from "./style";

export const Tag = ({children, ...props}) =>{
    <TagContainer {...props}>
        <Text fontFamily="semi_bold" size={14}>
            {children}
        </Text>
    </TagContainer>
}