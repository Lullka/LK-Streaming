import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    :root{
        --default-background-color: #000;
        --Header-height: 75px;
        --header-text-color-hover: #ae8aff;
        --header-background-color-hover: #9b65ff30;
        --header-hover-animation-duraction: 0.3s ease-in-out;
        --header-changing-positon-transition-duraction: 0.3s;
        --continueWatching-bar-color: #ae8aff;
        --Secundary-text-color: #A0A0A0;
        --Seriado-Age-color-16: #EC1D25;
        --Seriado-New: #ec241a;
        --Seriado-infos-extras: #141519;
        --Seriado-add-to-list-border-color: #ae8aff;
        --Go-to-series-about: #ae8aff;
        --submain-color: rgb(220, 220, 220);
        --description-font-color: #cecece;
        --Seriado-btn-season-list-hover-color: #ae8aff;
        --Star-color: #ae8aff;
        --default-hover-duraction: 0.3s;
        --modal-default-background-color: #141519;
        --Like-Button-transition: 0.2s;
        --background-text-modal: #9b65ff30;
        --sucess: #38cf5a;
    }

    html{
        scroll-behavior: smooth;
    }

    body{
        width: 100vw;
        height: 100vh;
        overflow-y: auto;
        overflow-x: hidden;
        background-color: var(--default-background-color);
    }

    body::-webkit-scrollbar{
        width: 10px;
        height: 100%x;
    }

    body::-webkit-scrollbar-track {
        background: #252835;
    }

    body::-webkit-scrollbar-thumb {
        background: #484d64;
        border-radius: 15px;
    }

    body::-webkit-scrollbar-thumb:hover{
        background: #747c9d;
    }

    body::-webkit-scrollbar-thumb:active{
        background: #626984;
    }
`;