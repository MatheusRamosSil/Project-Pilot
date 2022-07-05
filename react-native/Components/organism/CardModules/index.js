import {CardContainers} from "./style";
import { View} from 'react-native';
import { Range} from '../../atoms';
import {Module} from '../../organism';


export const CardModules = ({data}) =>{
  
    return(
        
        <View style={CardContainers.container}>
          
               <Range item={{title:data.newsName,color:'white', marginTop:24, }}/>
               <Module item={{...data.data[0]}}/>
               <Module item={{...data.data[1]}}/>
             
        </View>
    );
}
