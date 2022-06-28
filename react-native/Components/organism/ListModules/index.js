import { Module } from "../Module";
import { FlatList } from 'react-native'
import { ListModuleContainer } from "./style";


export const ListModules = ({data}) =>{
    
    return(
        <ListModuleContainer>
            <FlatList 
            
             data={data}
             renderItem={({item})  =>  <Module item={{...item}}/>}/>
        </ListModuleContainer>
        
    );
}