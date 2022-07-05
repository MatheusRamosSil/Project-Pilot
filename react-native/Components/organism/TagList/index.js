import { FlatList } from 'react-native'
import { Tag } from '../../mulecules';
import { ListContainer } from '../../atoms';

const NAMES_TAGS=[
    {   id:0,
        title: 'Business',
        url:'business'
    },
    {   id:1,
        title: 'Entertainment',
        url:'entertainment',
    },
    {   id:2,
        title: 'General',
        url:'general',
    },
    {   id:3 ,
        title:'Health',
        url:'health',
    },
    {   id:4, 
        title: 'Science',
        url:'science',
    },
    {   id:5, 
        title: 'Sports',
        url:'sports',
    },
    {   id:6, 
        title: 'Technology',
        url:'technology',
    },
  ];


export const TagList = ({ setCategory}) =>{

    return(
        <ListContainer>
            <FlatList 
              horizontal
              data={NAMES_TAGS}
              renderItem={({ item }) =>  <Tag item={{...item,setCategory}} />}/>
        </ListContainer>
        
    );
}