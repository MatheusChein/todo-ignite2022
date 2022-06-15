import styled from 'styled-components';

export const Container = styled.main`
  max-width: 736px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-bottom: 2rem;
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  strong {
    font-weight: 700;
    font-size: 0.875rem;

    span {
      background: ${(props) => props.theme.colors.gray[400]};
      color: ${(props) => props.theme.colors.gray[200]};
      border-radius: 16px;
      padding: 4px 8px;
      font-size: 0.75rem;
    }
  }

  .createdTodos {
    color: ${(props) => props.theme.colors.blue.main};
  }

  .doneTodos {
    color: ${(props) => props.theme.colors.purple.main};
  }
`;
