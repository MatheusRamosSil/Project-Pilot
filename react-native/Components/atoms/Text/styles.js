import styled from 'styled-components/native';

//color: ${({ color }) => color || 'black' };

export const FieldCustomText = styled.Text`
    font-size: ${({ theme, size }) => theme.metrics.px(size || 24)}px;
    color: ${({ theme,color }) => theme.colors[color || 'black']};
    margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 12)}px;
    margin-right: ${({ theme, mr }) => theme.metrics.px(mr || 0)}px;
    margin-left: ${({ theme, ml }) => theme.metrics.px(ml || 0)}px;
    margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
    font-family: ${({ theme, fontFamily }) => theme.fonts[fontFamily || 'regular']};
    line-height: ${({ lh, size, theme }) => theme.metrics.px(lh || size || 24)}px;
`