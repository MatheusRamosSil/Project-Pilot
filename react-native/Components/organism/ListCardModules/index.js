import { CardModules } from "..";
import { FlatList } from 'react-native'
import { ListModuleContainer } from "../ListModules/style";



export const ListCardModules = ({data, newsName}) =>{
    
    return(
        <ListModuleContainer>
          <CardModules data={{data, newsName}}/>
        </ListModuleContainer>
        
    );
}