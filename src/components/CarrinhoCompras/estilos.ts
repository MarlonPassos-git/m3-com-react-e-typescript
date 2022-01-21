import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 1.25rem;
  width: 1.063rem;
  border: none;
  background-color: transparent;
`;

export const Img = styled.img`
  height: 1.25rem;
  width: 1.063rem;
  object-fit: contain;
`;

export const TotalItens = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(0.188rem);
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 50%;
  background-color: var(--primary);
  font-size: 0.625rem;
  color: var(--white);
`;
