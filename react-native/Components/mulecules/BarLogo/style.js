import styled from 'styled-components/native';

export const BarContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top:${({ theme }) => theme.metrics.px(60)}px;
`