import React from 'react';
import { FlatList } from 'react-native';
import { CardMaior } from '../../mulecules';
import { Text } from '../../atoms';

const dados = [
    {
        id:0,
        image_url: 'https://cdn.pixabay.com/photo/2017/07/05/11/45/neymar-2474376__340.jpg',
    },
    {
        id:1,
        image_url: 'https://media.istockphoto.com/photos/soccer-players-celebrating-a-goal-picture-id1310476262?b=1&k=20&m=1310476262&s=170667a&w=0&h=qAsN7Ukm_8Tn5WBXmR6BdckPYmZ-3KDuTovC1kTL474=',
    },
    {
        id:2,
        image_url: 'https://cdn.pixabay.com/photo/2020/03/08/12/02/fcbarcelona-4912292__340.jpg',
    },
    {
        id:3,
        image_url: 'https://cdn.pixabay.com/photo/2017/07/04/21/18/neymar-2472682__340.jpg',
    },
]

export const HomeList = () =>{
    return <FlatList
    horizontal
    data={dados}
    renderItem={({item}) => <CardMaior item = {item} />}
    keyExtractor={(item) => item.id}
    
    />
}