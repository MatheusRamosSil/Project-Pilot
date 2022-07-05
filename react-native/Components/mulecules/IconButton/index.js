import { Ionicons } from '@expo/vector-icons'
import { ButtonContainer } from './style'
import { theme } from '../../styles';

export const IconButton = ({ iconName,props }) => {

  const callNewsOfCategory = () => {
    if (props.clickVariable === false){
      props.onClick(true)
    }
    console.log("enrtousadfashion")

  }
    return (
      <ButtonContainer onPress={() => {  callNewsOfCategory()}}>
        <Ionicons
          name={iconName}
          size={theme.metrics.px(29)}
          color={theme.colors.black}
        />
      </ButtonContainer>
    )
  }

