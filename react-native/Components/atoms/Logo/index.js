import logoApp from '../../../Assets/logoApp.png';
import {LogoImage} from './styles';

const sizes ={
    altura:48,
    largura:110,
    small:46,
    large:106,
}


export const Logo = ({size,size2}) =>{
    return<LogoImage source={logoApp} size={sizes[size || 'large']} size2={sizes[size2 || 'large']}/>
}