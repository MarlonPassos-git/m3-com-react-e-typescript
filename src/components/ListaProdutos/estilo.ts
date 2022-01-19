import styled from 'styled-components'

export const Container = styled.ul`
    grid-area: produtsList;
    display: grid;
    grid-template-columns: repeat(auto-fill, max(10.125rem, min(9.438rem + 2.9vw, 12.1875rem)));
    grid-template-rows: auto;
    -moz-column-gap: max(1.1875rem, min(0.25rem + 4vw, 4rem));
    column-gap: max(1.1875rem, min(0.25rem + 4vw, 4rem));
    row-gap: max(1.125rem, min(0.667rem + 2vw, 2.5rem));
    justify-content: center;
    

    
`