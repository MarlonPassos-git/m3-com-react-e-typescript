import styled from "styled-components";

export const Titulo = styled.h2`
        margin-bottom: 19px;
        
        font-size: var(--font-small);
        color: var(--black);
        text-transform: uppercase;
`

export const TituloA = styled.summary`
        margin-bottom: 0.875rem;
        
        font-size: var(--font-small);
        color: var(--black);
        text-transform: uppercase;
        font-size: 1.5;
    cursor: pointer;

    transition: all 0.3s;


    background-image: url('./images/seta_baixo.svg');
    background-repeat: no-repeat;
    background-position: right;

   

    &:focus-visible, &:hover{
        font-weight: bold;
    }
`

export const WrapperForm = styled.div`
    margin-bottom: 1.5rem;
`

export const WrapperFormA = styled.details`
     

    margin-bottom: 1.5rem;
    list-style: none;

`

export const WrapperInputs = styled.div`
    display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
      max-width: 9.813rem;
`

