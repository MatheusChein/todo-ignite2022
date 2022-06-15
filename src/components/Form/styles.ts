import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  margin-top: -30px;

  input {
    flex: 1;
    padding: 1rem;
    background: ${(props) => props.theme.colors.gray[500]};
    color: ${(props) => props.theme.colors.gray[100]};
    border: none;
    border-radius: 8px;
    outline: none;
    font-size: 1rem;

    &::placeholder {
      color: ${(props) => props.theme.colors.gray[300]};
      font-size: 1rem;
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    background: ${(props) => props.theme.colors.blue.dark};
    color: ${(props) => props.theme.colors.gray[100]};
    font-weight: 700;
    border-radius: 8px;
    border: none;

    transition: 200ms;

    svg {
      transition: 100ms;
    }

    &:hover {
      background: ${(props) => props.theme.colors.blue.main};

      svg {
        transform: rotate(90deg);
      }
    }
  }
`;
