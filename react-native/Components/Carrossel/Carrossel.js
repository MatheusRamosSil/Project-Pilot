import Carousel from 'react-native-snap-carousel';
import { Image, Text, View , Dimensions, Pressable} from 'react-native';
import styles from './Style';
import ViewPropTypes from 'deprecated-react-native-prop-types';
import {LinearGradient} from 'expo-linear-gradient';
import {LogBox} from "react-native";

LogBox.ignoreLogs([
"ViewPropTypes will be removed",
"ColorPropType will be removed",
])

const carrouselItems = [
    {
        title:'Aqui é o Titulo da materia',
        image:require('../../Assets/imagem640.jpg')
    },
    {
        title:'Titulo2',
        image:require('../../Assets/imagem640.jpg')
    },
    {
        title:'Titulo3',
        image:require('../../Assets/imagem640.jpg')
    },
    {
        title:'Titulo4',
        image:require('../../Assets/imagem640.jpg')
    },
    {
        title:'Titulo5',
        image:require('../../Assets/imagem640.jpg')
    },
    {
        title:'Titulo6',
        image:require('../../Assets/imagem640.jpg')
    },

];

const windowWidth = Dimensions.get('window').width;

function renderItem ({item}) {
    return(
            <View style = {styles.card}>
                <Image blurRadius={3} style = {styles.cardImage}source = {item.image} />
                <LinearGradient
                colors={['#9D9D9D', '#5B5B5B', '#2A2A2A']}
                style = {styles.cardTitulo}>
                        <Text style = {[styles.cardTitle]}>{item.title}</Text>
                </LinearGradient>
            </View>
    );
}

export default function Carrosel() {    
    return (
        
            <Carousel
                data = {carrouselItems}
                sliderWidth ={windowWidth}
                itemWidth = {200}
                renderItem = {renderItem}
                useScrollView ={true}
                firstItem = {0}
                loop = {true}
            
            />
       
    );
}