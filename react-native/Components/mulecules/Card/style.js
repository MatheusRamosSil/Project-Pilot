import styled from "styled-components/native";


export const CardContainer = styled.View`
    width: ${({ theme,wd }) => theme.metrics.px(wd || 98)}px;
    height: ${({ theme,ht }) => theme.metrics.px(ht || 98)}px;
    border-radius: ${({ theme,radius }) => theme.metrics.px( radius|| 8)}px;
    overflow: hidden;
   
`


export const CardImage = styled.ImageBackground`
  width: ${({ theme,widthImage }) => theme.metrics.px(widthImage || 98)}px;
  height: ${({ theme,heightImage }) => theme.metrics.px(heightImage || 98)}px;
`

