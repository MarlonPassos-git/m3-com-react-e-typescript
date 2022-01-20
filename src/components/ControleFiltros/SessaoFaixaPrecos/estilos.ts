import styled from "styled-components";

export const Titulo = styled.h2`
        margin-bottom: 0.875rem;
        
        font-size: var(--font-small);
        color: var(--black);
        text-transform: uppercase;
`

export const TituloA = styled.summary`
        margin-bottom: 0.875rem;
        
        font-size: var(--font-small);
        color: var(--black);
        text-transform: uppercase;

        font-size: 24px;
    cursor: pointer;

    background-image: url('./images/seta_baixo.svg');
    background-repeat: no-repeat;
    background-position: right;


    transition: all 0.3s;

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

`

