import { Appbar, Text, View } from 'react-native-paper';
import { Logo, FieldText } from '../../atoms';
import { BarContainer } from './style';

export const BarApp = ({item}) =>{
    const {title} = item
    return(
        <BarContainer>
             <Logo size="small" size2="large"/>
                <FieldText fontFamily="extra_bold" size={28} mt={16} ml={18} mb={8}
                >{title}</FieldText>
        </BarContainer>
    ); 
   
 }