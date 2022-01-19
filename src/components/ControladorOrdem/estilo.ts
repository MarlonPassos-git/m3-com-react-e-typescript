import styled from "styled-components";


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



export const Opcoes = styled.div`
    position: ${(props) => props.theme.opcoes.position};
    bottom: ${(props) => props.theme.opcoes.bottom};
    left: ${(props) => props.theme.opcoes.left};
    transform: ${(props) => props.theme.opcoes.transform};
    display: grid;
    grid-template-row: repeat(3, 1fr);
    align-items: center;
    gap: ${(props) => props.theme.opcoes.gap};

    height: ${(props) => props.theme.opcoes.height};
    width: ${(props) => props.theme.opcoes.width};
    border: ${(props) => props.theme.opcoes.border};
    
    font-size: ${(props) => props.theme.opcoes['font-size']};
    color: var(--black);
`

export const Opcao = styled.button`
    padding-left: ${(props) => props.theme.opcoes['padding-left']};
    height: 100%;

    background-color: var(--white);


    &:hover, &:focus-visible{
        background-color: var(--black);
        color: var(--white);
    }

`