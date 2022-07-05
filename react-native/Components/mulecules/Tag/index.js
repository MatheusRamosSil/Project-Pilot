import { FieldText } from "../../atoms";
import { TagContainer } from "./style";

export const Tag = ({ item}) => {

    const callNewsOfCategory = ({urlCategory}) => {
       item.setClick(true)
       item.setCategory(urlCategory)
    }


    return (
        <TagContainer mt={24} ml={14} onPress={() => {
            callNewsOfCategory({ urlCategory: item.url })
        }} >
            <FieldText fontFamily="semi_bold" size={14} mt={8} mb={8} color={'white'}>{item.title}</FieldText>
        </TagContainer>
    );


}
