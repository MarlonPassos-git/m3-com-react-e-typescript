import styled from "styled-components";

export const Container = styled.button`

  
  

  grid-area: button;
    justify-self: center;
    height: 2.188rem;
    width: 10.938rem;
    margin: 70px 0 35px;
    background-color: var(--primary);
    color: var(--white);
    font-size: var(--font-very-small);
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    transition-property: color, background-color;
    transition-duration: 0.5s;


    &:hover {
      border: 3px solid var(--primary);
      background-color: var(--white);
      color: var(--primary);
      transform: perspective(1px) translateZ(0);
    }

    
`