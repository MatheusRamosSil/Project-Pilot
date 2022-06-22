import React from 'react';
import { FlatList } from 'react-native';
import { CardMaior } from '../../mulecules';
import { Text } from '../../atoms';

const dados = [
    {
        id:0,
        image_url:'https://www.cartacapital.com.br/wp-content/uploads/2022/01/Sem-T%C3%ADtulo-16-3-1024x614.jpg',
    },
    {
        id:1,
        image_url:'https://s2.glbimg.com/hUDZMtPua1GHVrMyNKnSPcj6Rko=/0x0:1024x768/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/Y/D/xu7eVUSaiPjquKvdrOJw/whatsapp-image-2022-06-08-at-20.38.29.jpeg',
    },
    {
        id:2,
        image_url:'https://lh3.googleusercontent.com//J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=rj-w300-h300-l95-c0xffffff',
    },
    {
        id:3,
        image_url:'https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2022/06/design-sem-nome-2022-06-08t114926-103-729x486.jpg',
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