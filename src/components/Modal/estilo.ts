import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    grid-template:
        "title button" 4.375rem
        "line line" 30px
        "content content"/1fr 1fr;
    background: var(--white);
    padding: 0 16px;

`

export const Titulo = styled.h1`
  grid-area: title;
    justify-self: start;
    align-self: center;
    font-size: 1.75rem;
    text-transform: uppercase;
    color: #666666;
`

export const ButtonFechar = styled.button`
    grid-area: button;
    justify-self: end;
    align-self: center;
    height: 1.125rem;
    width: 1.125rem;
    background-image: url(../img/x.svg);
`

export const Linha = styled.hr`
      grid-area: line;
    background: var(--black);
    height: 0.063rem;
    width: calc(100% + 32px);
    transform: translateX(-16px);
`

export const WrapperContent = styled.div`
    grid-area: content;

`