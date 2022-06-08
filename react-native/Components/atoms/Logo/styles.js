import styled from 'styled-components/native';

export const LogoImage = styled.Image`
    height: ${({size, theme }) => theme.metrics.px(size)}px;
    width: ${({size2, theme }) => theme.metrics.px(size2)}px;
    margin:${({ theme }) => theme.metrics.px(15)}px;
`