import React from 'react';
import { FlatList } from 'react-native';
import { CardMaior } from '../../mulecules';
import { Text } from '../../atoms';
import { ListContainer } from './styles';



export const HomeList = ( {data} ) =>{
    return (
    <ListContainer>
        <FlatList
            horizontal
            data={data}
            renderItem={({item}) => <CardMaior item = {item} />}
            keyExtractor={(item) => item.id}
    
        />
    </ListContainer>
    )
}