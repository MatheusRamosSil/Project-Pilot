import React from 'react';
import { FlatList } from 'react-native';
import { CardMaior } from '../../mulecules';


export const HomeList = ({data}) =>{
    return <FlatList
    horizontal
    data={data}
    renderItem={({item}) => <CardMaior item = {item} />}
    />
}