import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template:
    "title order" 9.313rem
    "filters produtsList"
    ". button"
    / 13.2088rem 1fr;
  min-height: calc(100vh - 4rem - 2.063rem);
  padding: 0 var(--spacing-container-padding);

  @media (max-width: 750px) {
    grid-template:
      "title title"
      "filtrar ordenar "
      "produtsList produtsList"
      "button button"/1fr 1fr;
  }
`;

interface WrapperInputsProps {
  tipoInput?: string;
}

export const WrapperInputs = styled.div<WrapperInputsProps>`
    ${({ tipoInput }) =>
      tipoInput === "tamanho" &&
      `
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
        max-width: 9.813;
        `}}
`;

export const Titulo = styled.h1`
  grid-area: title;
  margin-top: 2.5rem;
  font-size: var(--font-very-large);
  color: var(--black);

  @media (max-width: 750px) {
    text-align: center;
    margin-bottom: 0.75rem;
  }
`;

export const Aside = styled.aside`
  grid-area: filters;
`;
