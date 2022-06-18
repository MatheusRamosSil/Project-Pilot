import logoApp from '../../../Assets/logoApp.png';
import {LogoImage} from './styles';

const sizes ={
    altura:48,
    largura:110,
    small:46,
    large:106,
}


export const Logo = ({size,size2}) =>{
    return<LogoImage source={logoApp} size={sizes[size || 'large']} size2={sizes[size2 || 'large']} margin={15}/>
}

export const LogoModule = ({ image}) =>{
    return <LogoImage source={{uri:image}} size={40} size2={80} margin={8} radius={6}/>
}