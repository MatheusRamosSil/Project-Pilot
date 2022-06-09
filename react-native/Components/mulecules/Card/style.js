import styled from "styled-components/native";

export const CardContainer = styled.View`
    width: ${({ theme }) => theme.metrics.px(98)}px;
    height: ${({ theme }) => theme.metrics.px(98)}px;
    border-radius: ${({ theme }) => theme.metrics.px(8)}px;
    overflow: hidden;
   
`


export const CardImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`