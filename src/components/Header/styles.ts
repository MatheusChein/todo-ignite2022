import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background: ${(props) => props.theme.colors.gray[700]};
`;
