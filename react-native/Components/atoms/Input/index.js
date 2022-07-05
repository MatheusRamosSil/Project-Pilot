import { InputContainer,  ButtonsView } from "./style";
import {TextInput} from 'react-native';
import { IconButton } from "../../mulecules";
import { StyleSheet, Text, View } from 'react-native';

export const Input = ({onClick, clickVariable,query,setQuery}) =>{
    return(
        <InputContainer>
             <TextInput 
                style={styles.input}
                placeholder="Search"
                maxLength={30}
                value={query}
                onChangeText={text => setQuery(text)} 
             />
            
            <ButtonsView>
             <IconButton props={{onClick,clickVariable}} iconName ="search"/>
           </ButtonsView>
        </InputContainer>
    );
}

const styles = StyleSheet.create({
    container: {
      marginTop: 50,
    },
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
    input: {
        marginLeft: 20,
    },
  });