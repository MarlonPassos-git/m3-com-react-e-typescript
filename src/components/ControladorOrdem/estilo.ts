import styled, {css} from "styled-components";


interface ContainerProps {
    monstrarOpcoes: boolean;
}


export const Container = styled.form<ContainerProps>`

    grid-area: order;
    align-self: center;
    justify-self: end;
    display: flex;
    justify-content: ${({monstrarOpcoes}) => (monstrarOpcoes ? "start" : "center")};
    align-items: center;
    position: relative;
    
    height: 2.625rem;
    width: 8.875rem;
    border: var(--black) solid 0.063rem;
    padding-left: 0.625rem;

    text-align: start;

    cursor: pointer;
    z-index: 10;

    &:hover, &:focus-visible{
        background-color: var(--black);
        color: var(--white);
    }
   

`




export const Opcoes = styled.div`${({ theme: {opcoes}}) => css` 
    position: ${opcoes.position};
    bottom: ${opcoes.bottom};
    left: ${opcoes.left};
    transform: ${opcoes.transform};
    gap: ${opcoes.gap};
    height: ${opcoes.height};
    width: ${opcoes.width};
    border: ${opcoes.border};
    font-size: ${opcoes['font-size']};
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    align-items: center;
    color: var(--black);
`}` 


export const Opcao = styled.button`
    padding-left: ${({theme}) => theme.opcao['padding-left']};
    height: 100%;

    background-color: var(--white);

    
    &:hover, &:focus-visible{
        background-color: var(--black);
        color: var(--white);
        font-weight: bold;
    }

`