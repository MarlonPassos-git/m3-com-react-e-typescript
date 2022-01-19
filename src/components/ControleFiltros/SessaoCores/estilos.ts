import styled from "styled-components";

export const Titulo = styled.h2`
        margin-bottom: 0.875rem;
        
        font-size: var(--font-small);
        color: var(--black);
        text-transform: uppercase;
`

export const WrapperForm = styled.div`
    margin-bottom: 1.5rem;
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
