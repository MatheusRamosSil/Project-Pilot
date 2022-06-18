import { FieldText } from "../../atoms";
import { RangeContainer } from "./style";


export const Range = ({item}) =>{
    const {title,color,marginTop,marginLeft} = item
    return(
        <RangeContainer mt={marginTop} ml={marginLeft}>
            <FieldText fontFamily="semi_bold" size={14} ml={18} mt={8} mb={8}color={color}>{title}</FieldText>
        </RangeContainer>
    );
}