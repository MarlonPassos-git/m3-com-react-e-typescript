import styled from "styled-components";

export const Container = styled.li`
      display: flex;
    flex-direction: column;
    align-items: center;
    height: max(22.3125rem, min(20.875rem + 6.1vw, 26.625rem));
    width: max(10.125rem, min(9.438rem + 2.9vw, 12.1875rem));
    justify-content: end;
`

export const Img = styled.img`
    height: max(15.125rem, min(14.063rem + 4.5vw, 18.3125rem));
    width: 100%;
    object-fit: contain;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover, &:focus-visible{
        transform: scale(1.05);
    }
`

export const WraperImg = styled.a`

    

    height: max(15.125rem, min(14.063rem + 4.5vw, 18.3125rem));
    overflow: hidden;

    &:focus-visible{

      border: 0.063rem  solid var(--primary);

      img {
        transform: scale(1.15);
      }
    }

`

export const Tituto = styled.p`

  margin: max(0.5rem, min(0.438rem + 0.3vw, 0.6875rem)) 0 max(0.5rem, min(0.458rem + 0.2vw, 0.625rem));
    font-size: var(--font-very-small);
    text-transform: uppercase;
`

export const Preco = styled.strong`
      font-size: var(--font-small);
    font-weight: bold;
`

export const Parcelamento = styled.p`
  font-size: var(--font-small);
    margin-bottom: max(0.75rem, min(0.708rem + 0.2vw, 0.875rem));

`

export const Botao = styled.button`
    width: 100%;
    height: 2.063rem;
    background-color: var(--black);
    font-size: var(--font-very-small);
    font-weight: bold;
    color: var(--white);
    text-transform: uppercase;
    text-align: center;
    transition-property: color, background-color;
    transition-duration: 0.5s;

    &:hover, &:focus-visible{
      border: 0.188rem solid var(--black);
      background-color: var(--white);
      color: var(--black);
      transform: perspective(0.063rem ) translateZ(0);
    }

`