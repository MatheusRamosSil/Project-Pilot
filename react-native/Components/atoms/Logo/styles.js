import styled from 'styled-components/native';

export const LogoImage = styled.Image`
    height: ${({size, theme }) => theme.metrics.px(size)}px;
    width: ${({size2, theme }) => theme.metrics.px(size2)}px;
    border-radius:${({radius, theme }) => theme.metrics.px(radius || 0)}px;
    margin:${({ margin,theme }) => theme.metrics.px(margin)}px;
`
