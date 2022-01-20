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


interface WrapperInputsProps {
    mostraTudo?: boolean;
}

export const WrapperInputs = styled.div<WrapperInputsProps>`
    ${({ mostraTudo }) => (!mostraTudo ) && `
        & :nth-child(n + 6) {
            display: none;
        }
    `}

`

export const BotaoMostraMaisCores = styled.button`
    font-size: 0.75rem;
    text-decoration: underline;
    position: relative;
    
    &:hover, &:focus-visible {
        font-weight: bold;
    }
}
`
