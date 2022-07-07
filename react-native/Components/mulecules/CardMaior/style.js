import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';

export const CardContainer = styled.TouchableOpacity`
    width: ${({ theme }) => theme.metrics.px(200)}px;
    height: ${({ theme }) => theme.metrics.px(220)}px;
    border-radius: ${({ theme }) => theme.metrics.px(8)}px;
    overflow: hidden;
    margin-left: ${({theme}) => theme.metrics.px(12)}px;
    margin-top: ${({theme}) => theme.metrics.px(12)}px;
`
export const CardImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`

export const GradientComponent = styled(LinearGradient)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-horizontal: ${({ theme }) => theme.metrics.px(0)}px;
  padding-top: ${({ theme }) => theme.metrics.px(0)}px;
`