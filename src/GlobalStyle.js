import { createGlobalStyle } from "styled-components";



export  const GlobalStyles = createGlobalStyle`


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%;
    }

    body{
        min-width: 375px;
        min-height: 100vh;
        padding: 8.8rem 2.4rem 6.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Poppins', sans-serif;
        background: url(/images/bg-intro-mobile.png)  #FF7979;
        background-repeat: no-repeat;
        background-position:center;

    @media only screen and (min-width: 1440px){
        background: url(/images/bg-intro-desktop.png) #FF7979;
        background-repeat: no-repeat;
        background-position:center;
    }

    }
`;