import {CardContainers} from "./style";
import { View} from 'react-native';
import { Range,LogoModule} from '../../atoms';
import {Module} from '../../organism';


export const CardModules = ({item}) =>{

  const {title,image_url,logo_url,url} = item
    return(
        
        <View style={CardContainers.container}>
          <View style={CardContainers.widtContainer}>
            <LogoModule image={logo_url}/>
          </View>
               <Range item={{title:"News",color:'white', marginTop:2, }}/>
               <Module item={{title:title, image:image_url, url:url}}/>
               <Module item={{title:title, image:image_url, url:url}}/>
             
        </View>
    );
}
