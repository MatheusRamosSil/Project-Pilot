import styled from 'styled-components/native'

export const InputContainer = styled.View`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: ${({ theme }) => theme.metrics.px(327)}px;
  height: ${({ theme }) => theme.metrics.px(42)}px;
  border-radius: ${({ theme }) => theme.metrics.px(24)}px;
  border-width: ${({ theme }) => theme.metrics.px(1)}px;
  border-color: ${({ theme }) => theme.colors.grey};
  background-color: ${({ theme }) => theme.colors.grey};
  padding: ${({ theme }) => theme.metrics.px(6)}px;
  margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 15)}px;
  margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 15)}px;
  margin-left: ${({ theme, ml }) => theme.metrics.px(ml || 14)}px;
  margin-right: ${({ theme, mr }) => theme.metrics.px(mr || 14)}px;
  flex-direction: row;
`


export const TextInput = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor: theme.colors.light,
}))`
   
    margin-left:${({ theme }) => theme.metrics.px(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.light};
    font-size: ${({ theme }) => theme.metrics.px(14)}px;
  `

export const ButtonsView = styled.View`
  display: flex;
  height: 100%;
  
`