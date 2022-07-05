import { Module } from "../Module";
import { FlatList } from 'react-native'
import { ListModuleContainer } from "./style";
import { FieldText } from '../../atoms';
import { Container } from '../../atoms';

export const ListModules = ({data}) =>{
  
    if(data.length > 0){
        return(
            <ListModuleContainer>
                <FlatList 
                
                 data={data}
                 renderItem={({item})  =>  <Module item={{...item}}/>}
                 />
            </ListModuleContainer>
            
        );
    }
    return (
        <Container align="center" justify="flex-start" mt={80}>
             <FieldText fontFamily="regular" size={28}  ml={18} align="center"
                >Por favor, digite uma noticia ou busque pela categoria</FieldText>
        </Container>
       
    )
}