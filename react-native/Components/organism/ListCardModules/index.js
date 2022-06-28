import { CardModules } from "..";
import { FlatList } from 'react-native'
import { ListModuleContainer } from "../ListModules/style";

const FAKE_DATA = [
    {
        id:1,
        title:'Lorem ipsum dolor sit amet Fusce auctor nulla sit amet scelerisque',
        logo_url:'https://static.poder360.com.br/2021/10/logo-estadao-1.png',
        image_url:'https://www.cartacapital.com.br/wp-content/uploads/2022/01/Sem-T%C3%ADtulo-16-3-1024x614.jpg',
        url:'https://expo.dev/',
    },
    { 
        id:2,
        title:'Phasellus sed urna leo',
        logo_url:'https://static.poder360.com.br/2021/10/logo-estadao-1.png',
        image_url:'https://s2.glbimg.com/hUDZMtPua1GHVrMyNKnSPcj6Rko=/0x0:1024x768/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/Y/D/xu7eVUSaiPjquKvdrOJw/whatsapp-image-2022-06-08-at-20.38.29.jpeg',
        url:'https://expo.dev/',
    },
    {
        id:3,
        title:'Fusce auctor nulla sit amet scelerisque',
        logo_url:'https://static.poder360.com.br/2021/10/logo-estadao-1.png',
        image_url:'https://lh3.googleusercontent.com//J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=rj-w300-h300-l95-c0xffffff',
        url:'https://expo.dev/',
    },
    {
        id:4,
        title:'Sed non risus velit',
        logo_url:'data:image/png;base64,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',
        image_url:'https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2022/06/design-sem-nome-2022-06-08t114926-103-729x486.jpg',
        url:'https://expo.dev/',
    }
];


export const ListCardModules = ({item}) =>{

    return(
        <ListModuleContainer>
            <FlatList 
             horizontal
             data={FAKE_DATA}
            
            renderItem={ item  =>  <CardModules data={{item}}/>}/>
        </ListModuleContainer>
        
    );
}