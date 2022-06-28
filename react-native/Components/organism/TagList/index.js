import { FlatList } from 'react-native'
import { Tag } from '../../mulecules';
import { ListContainer } from '../../atoms';

const NAMES_TAGS=[
    {   id:0,
        title: 'Business'
    },
    {   id:1,
        title: 'Entertainment'
    },
    {   id:2,
        title: 'General'
    },
    {   id:3 ,
        title:'Health'
    },
    {   id:4, 
        title: 'Science'
    },
    {   id:5, 
        title: 'Sports'
    },
    {   id:6, 
        title: 'Technology'
    },
  ];


export const TagList = () =>{
    return(
        <ListContainer>
            <FlatList 
              horizontal
              data={NAMES_TAGS}
              renderItem={({ item }) =>  <Tag item={{...item }}/>}/>
        </ListContainer>
        
    );
}