import {CardContainers} from "./style";
import { View} from 'react-native';
import { Range} from '../../atoms';
import {Module} from '../../organism';


export const CardModules = ({item}) =>{

    return(
        
        <View style={CardContainers.container}>
          
               <Range item={{title:"",color:'white', marginTop:24, }}/>
               <Module item={{...item}}/>
               <Module item={{...item}}/>
             
        </View>
    );
}
