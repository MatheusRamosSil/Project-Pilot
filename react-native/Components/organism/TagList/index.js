import { FlatList } from 'react-native'
import { Tag } from '../../mulecules';
import { ListContainer } from '../../atoms';

export const TagList = () =>{
    return(
        <ListContainer>
            <FlatList horizontal
             data={[
                {key: 'Devin'},
                {key: 'Dan'},
                {key: 'Dominic'},
                {key: 'Jackson'},
                {key: 'James'},
              ]}
            
            renderItem={({ item }) =>  <Tag item={{title:item.key,color:'white', marginTop:24,marginLeft:14 }}/>}/>
        </ListContainer>
        
    );
}