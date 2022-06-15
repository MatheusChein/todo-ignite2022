import styled, { css } from 'styled-components';

interface TodoProps {
  isDone: boolean;
}

export const Container = styled.div<TodoProps>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0.75rem;
  background: ${(props) => props.theme.colors.gray[500]};
  padding: 2rem 0.5rem;
  border: none;
  border-radius: 8px;

  & + & {
    margin-top: 0.75rem;
  }

  input {
    -webkit-appearance: none;
    display: inline-block;
    width: 20px;
    height: 20px;
    padding: 0;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.colors.blue.dark};
    position: relative;

    &:hover {
      cursor: pointer;
    }

    &:checked:after {
      content: '✓';
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: ${(props) => props.theme.colors.purple.dark};
      left: 0;
      right: 0;
      color: ${(props) => props.theme.colors.gray[100]};
    }
  }

  label {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.gray[100]};
    width: 100%;
    max-width: 630px;
    ${(props) =>
      props.isDone &&
      css`
        color: ${props.theme.colors.gray[300]};
        text-decoration: line-through;
      `}
  }

  button {
    background: transparent;
    border: none;
    border-radius: 4px;

    &:focus {
      box-shadow: 0 0 0 2px ${(props) => props.theme.colors.danger};

      svg {
        color: ${(props) => props.theme.colors.danger};
      }
    }

    svg {
      color: ${(props) => props.theme.colors.gray[300]};
      transition: 100ms;

      &:hover {
        color: ${(props) => props.theme.colors.danger};
      }
    }
  }
`;
