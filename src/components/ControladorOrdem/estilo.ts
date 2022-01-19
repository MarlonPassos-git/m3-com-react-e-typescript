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
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(-1px ,100%);
    display: grid;
    grid-template-row: repeat(3, 1fr);
    align-items: center;

    height: 107px;
    width: 8.875rem;
    border: var(--black) solid 0.063rem;
    
    font-size: var(--font-small);
    color: var(--black);
    

`

export const Opcao = styled.button`
    padding-left: 0.625rem;
    height: 100%;

    background-color: var(--white);

    

    &:hover, &:focus-visible{
        background-color: var(--black);
        color: var(--white);
    }

`