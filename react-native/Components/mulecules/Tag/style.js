import styled from 'styled-components/native';

export const TagContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.ocean};
  height: ${({ theme }) => theme.metrics.px(40)}px;
  width: ${({ theme }) => theme.metrics.px(120)}px;
  border-radius: ${({ theme }) => theme.metrics.px(6)}px;
  margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
  margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
  margin-left: ${({ theme, ml }) => theme.metrics.px(ml || 0)}px;
  margin-right: ${({ theme, mr }) => theme.metrics.px(mr || 0)}px;
`

