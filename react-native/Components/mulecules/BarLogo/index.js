import { Logo, FieldText } from '../../atoms';
import { BarContainer } from './style';

export const BarApp = ({item}) =>{
    const {title,mb,align,ml} = item
    return(
        <BarContainer>
             <Logo size="small" size2="large"/>
                <FieldText fontFamily="extra_bold" size={28} mt={16} ml={18} mb={mb} align={align}
                >{title}</FieldText>
        </BarContainer>
    ); 
   
 }