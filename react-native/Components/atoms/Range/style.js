import styled from 'styled-components/native';

export const RangeContainer = styled.View`
  display: flex;
  background-color: ${({ theme }) => theme.colors.ocean};

  width: 100%;
  margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
  margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
  margin-left: ${({ theme, ml }) => theme.metrics.px(ml || 0)}px;
  margin-right: ${({ theme, mr }) => theme.metrics.px(mr || 0)}px;
`
