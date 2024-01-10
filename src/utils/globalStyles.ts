import { createGlobalStyle } from "styled-components";
import { Theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: Outfit;
        src: url("./assets/fonts/Outfit-VariableFont_wght.ttf");
        font-display: fallback;
    }

    @font-face {
        font-family: Kamikaze;
        src: url("./assets/fonts/Kamikaze.ttf");
        font-display: fallback;
    }

    :root {
        --default-font-size: 1.6rem;

        --body-color: ${({ theme }: { theme: Theme }) => theme.body};
        --text-color: ${({ theme }: { theme: Theme }) => theme.text};
        --color-red-light: ${({ theme }: { theme: Theme }) =>
			theme.colorRedLight};
        --color-red-dark: ${({ theme }: { theme: Theme }) =>
			theme.colorRedDark};
        --color-blue-light: ${({ theme }: { theme: Theme }) =>
			theme.colorBlueLight};
        --color-blue-dark: ${({ theme }: { theme: Theme }) =>
			theme.colorBlueDark};
    }

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        position: relative;
        font-family: "Outfit", "Trebuchet MS";
        user-select: none;

        transition: color .1s ease-in, background-color .2s ease-in;
    }

    html {
        font-size: 62.5%;
    }

    body {
        width: 100%;
        max-height: 100vh;
        font-size: var(--default-font-size);
        line-height: 1.5;
        background-color: ${({ theme }: { theme: Theme }) => theme.body};
        color: ${({ theme }: { theme: Theme }) => theme.text};
    }

    #root {
        width: 100%;
        max-height: 100vh;
        scroll-behavior: smooth;
    }

    a {
        font: inherit;
        display: inline-block;
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }

    a:hover {
        color: var(--color-red-dark);
    }

    /* Media Breakpoints */
    /* 
        0	- 600px(37.5em): 		Phones
        600 - 900px(56.25em): 		Tablet portriat
        900 - 1200px(75em): 		Tablet landscape	
    */

    @media (max-width: 75em) {
        html {
            font-size: 56.25%; /* 1rem = 9px*/
        }
    }

    @media (max-width: 56.25em) {
        html {
            font-size: 50%; /* 1rem = 8px*/
        }
    }

    @media (max-width: 37.5em) {
        html {
            font-size: 46.88%; /* 1rem = 7.5px*/
        }

        body {
            font-size: 1.8rem;
        }
    }
`;
