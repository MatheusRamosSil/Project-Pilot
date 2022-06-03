import Carousel from 'react-native-snap-carousel';
import { Image, Text, View , Dimensions} from 'react-native';
import styles from './Style';
import ViewPropTypes from 'deprecated-react-native-prop-types';
//https://github.com/facebook/react-native/issues/33557
import { LinearGradient } from 'expo-linear-gradient';
import {LogBox} from "react-native";

LogBox.ignoreLogs([
"ViewPropTypes will be removed",
"ColorPropType will be removed",
])

const carrouselItems = [
    {
        title:'Titulo1',
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

const windowWidth = Dimensions.get('window').width

function renderItem ({item}) {
    return(
       
            <View style = {styles.cardSegundo}>
                <Image blurRadius={3} style = {styles.cardImageSegundo}source = {item.image} />
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