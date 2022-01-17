import { createGlobalStyle } from 'styled-components';

export const EstilosGlobais = createGlobalStyle`

:root {
    /* Colors */

    --black: #000000;
    --gray-100: #c7c7c7;
    --gray-500: #00000050;
    --gray-900: #666666;
    --primary: #00c0ee;
    --white: #ffffff;

    /* Fonts */

    --font-very-large: 2rem;
    --font-large: 1.75rem;
    --font-medium: 1.5rem;
    --font-small: 1rem;
    --font-very-small: 0.875rem;

    /* Breakpoints */

    --desktop-size: 1500px;
    --mobile-size: 375px;

    /* spacings */

    --spacing-container-padding: max(
        1rem,
        min(calc(-2.042rem + 13vw), 10.125rem)
    );

    @media (min-width: 1500px) {  
        --spacing-container-padding: calc(-36.75rem + 50vw);
  }
}

body {
    background-color: var(--white);

    font-family: "Open Sans", sans-serif;
}

button,input[type="radio"] {
    cursor: pointer;
}
`
