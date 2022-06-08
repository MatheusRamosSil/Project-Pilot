import { InputContainer, TextInput } from "./style";

export const Input = (props) =>{
    return(
        <InputContainer>
            <TextInput {...props}/>
        </InputContainer>
    );
}