import styled from 'styled-components'


interface BotaoProps {
  gridArea: string;
}

export const Botao = styled.button<BotaoProps>`
  grid-area: ${(props: BotaoProps) => props.gridArea};
  height: 3.063rem;
  width: 100%;
  border: solid 0.063rem var(--black);
  margin-bottom: 2.375rem;
  font-size: var(--font-medium);
  color: #666666;
  text-align: center;
  transition: all 0.2s linear;

  &:hover {
    background-color: var(--black);
    color: var(--white);
    font-weight: bold;
  }
`