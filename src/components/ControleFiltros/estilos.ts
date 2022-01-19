import styled from "styled-components";

export const Container = styled.form`

`

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
    tipoInput?: string;
}

export const WrapperInputs = styled.div<WrapperInputsProps>`
    ${({ tipoInput }) => (tipoInput === 'tamanho' ) && 
        `
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
        max-width: 157px;
        `
    }}
`