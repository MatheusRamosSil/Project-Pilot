import styled from 'styled-components/native';

export const FieldCustomText = styled.Text`
    font-size: ${({ theme, size }) => theme.metrics.px(size || 24)}px;
    color: ${({ color }) => color || 'black' };
    margin: ${({ theme, mt }) => theme.metrics.px(mt || 20)}px;
    font-family: ${({ theme, fontFamily }) => theme.fonts[fontFamily || 'regular']};

`