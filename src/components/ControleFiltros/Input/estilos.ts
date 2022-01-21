import styled from "styled-components";

interface ContainerProps {
  tipoSessao?: string;
}

export const Container = styled.label<ContainerProps>`
  display: flex;
  align-items: center;
  font-size: var(--font-very-small);
  margin-bottom: 6.7px;
  cursor: pointer;
  text-transform: capitalize;

  ${({ tipoSessao }) =>
    tipoSessao === "tamanhos" &&
    `
    display: grid;
    grid-template-columns: 1fr;
    height: 2rem;
    width: 2rem;
    margin: 0;
    text-transform: uppercase;

    & >* {
      grid-column: -1/1;
      grid-row: -1/1;
      align-self: center;
      justify-self: center;

    }

    input {
      height: 2rem;
      width: 2rem;
      border: var(--gray-500) solid 0.125rem;
      background-color: transparent;
      padding: 0;
      margin: 0;

      &:checked {
        background-color: transparent;
        border-color: var(--primary);
      }
    }
    `}
`;

export const Checkbox = styled.input`
  height: 1rem;
  width: 1rem;
  border: var(--gray-500) solid 0.063rem;
  margin-right: 0.625rem;

  background-color: transparent;

  &:checked {
    background-color: var(--primary);
    background-clip: content-box;
    padding: 0.125rem;
  }

  &:focus-visible {
    outline: var(--primary) solid 0.125rem;
    outline-offset: 0.063rem;
  }
`;

export const Texto = styled.span``;
