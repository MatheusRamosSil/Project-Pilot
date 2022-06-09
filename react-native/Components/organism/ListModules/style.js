import styled from 'styled-components/native';


export const ListModuleContainer = styled.View`
  display: flex;
  flex:1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 16)}px;
`