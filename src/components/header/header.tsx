import { useEffect, useState } from "react";
import { Link, useNavigate  } from "react-router-dom"
import styled from "styled-components"

export const Header = () => {
    const [URLPath, setURLPath] = useState<string>(window.location.pathname);
    const History = useNavigate();
    const [HamburguerMenu, setHamburguerMenu] = useState<boolean>(false);

    useEffect(() => {
        setURLPath(window.location.pathname);
    }, [History]);
    
    return(
        <Container>
            <Nav>
                <Left>
                    <Humburguer className={HamburguerMenu ? "active" : ""} onClick={() => setHamburguerMenu(!HamburguerMenu)}><span></span></Humburguer>
                    <Link to={'/'}><img src="/svg/lkLogo.svg" alt="Logo do Luka" /></Link>
                </Left>
                <Center className={HamburguerMenu ? "active" : ""}>
                    <ul>
                        <li><Link to={'/browse'} className={URLPath == "/browse" ? "active" : ""}>Início</Link></li>
                        <li><Link to={'/films'} className={URLPath == "/films" ? "active" : ""}>Filmes</Link></li>
                        <li><Link to={'/series'} className={URLPath == "/series" ? "active" : ""}>Séries</Link></li>
                        <li><a href="https://github.com/Lullka" target="_blank" className={URLPath == "/portifolio" ? "active" : ""}>Portifólio</a></li>
                    </ul>
                </Center>
                <Right>
                    <Link to={"/search"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none"><path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" strokeWidth="2" stroke="#fff" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </Link>
                    <ButtonLogin/>
                </Right>
            </Nav>
        </Container>
    )
}

const ButtonLogin = () => {
    const [AccountModal, setAccountModal] = useState<boolean>(false);

    return(
        <ContainerButtonLogin>
            <StyleButtonLogin onClick={() => setAccountModal(!AccountModal)}><img src="/imgs/perfilPhoto.jpg" alt="User Photo" /> </StyleButtonLogin>
            <ModalButtonLogin className={AccountModal ? "active" : ""}>
                <Link to={'/user'}>Seu perfil</Link>
                <button>Deslogar</button>
            </ModalButtonLogin>
        </ContainerButtonLogin>
    )
};

const Container = styled.nav`
    width: 100%;
    position: relative;
    height: var(--Header-height); /* Introduz o tamanho comun do header na parte superior da página */

    @media only screen and (max-width: 580px){
        height: var(--mobile-Header-height);
    }
`;

const Nav = styled.nav`
    z-index: 2;
    backdrop-filter: blur(10px);
    width: 100%;
    padding: 0 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: var(--header-hover-animation-duraction);
    height: var(--Header-height); //Introduz o tamanho comun do header na parte superior da página
    position: fixed;
    top: 0;
    background: linear-gradient(170deg, rgba(102, 16, 242, 0.2) 18%, rgba(60, 0, 136, 0) 40%), linear-gradient(336deg, rgba(111, 66, 193, .2) 8%, rgba(60, 0, 136, 0) 40.5%);

    &:active{ /* Introduz o estilo padrão na página inicial quando o usuário scroll suficiente */
        height: var(--Header-height); //Introduz o tamanho comun do header na parte superior da página
        position: fixed;
        top: 0;
        background: linear-gradient(170deg, rgba(102, 16, 242, 0.2) 18%, rgba(60, 0, 136, 0) 40%), linear-gradient(336deg, rgba(111, 66, 193, .2) 8%, rgba(60, 0, 136, 0) 40.5%);
    }

    img{
        width: 55px;
        height: 55px;
    }

    img:active{
        filter: grayscale(15%);
    }

    @media only screen and (max-width: 780px){
        padding: 0 30px 0 30px;
    }

    @media only screen and (max-width: 580px){
        height: var(--mobile-Header-height);

        img{
            width: 50px;
            height: 50px;
        }

        &:active{
            height: var(--mobile-Header-height);
        }
    }

    @media only screen and (max-width: 490px){
        padding: 0 20px;
    }
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
`;

const Center = styled.div`
    ul{
        display: flex;
        gap: 10px;
        list-style: none;
    }

    li a{
        text-decoration: none;
        font-size: 22px;
        font-weight: 400;
        padding: 9px 11px;
        border-radius: 4px;
        color: white;
        transition: var(--header-hover-animation-duraction);
    }

    li a:hover,
    li a.active{
        background-color: var(--header-background-color-hover);
        color: var(--header-text-color-hover);
    }

    @media only screen and (max-width: 780px){
        position: fixed;
        top: var(--Header-height);
        left: 0;
        background: rgba(23, 23, 23, 0.8);
        height: calc(100vh - var(--Header-height));
        width: 100%;
        z-index: 2;
        transition: 0.1s;

        ul{
            height: 100%;
            width: 100%;
            flex-direction: column;
            gap: 0px;
        }

        ul li{
            display: flex;
            height: 100%;
        }
        
        ul li a{
            width: 100%;
            height: 100%;
            display: flex;
            border-radius: 0px;
            align-items: center;
            justify-content: center;
        }

        ul li:nth-child(4) a{
            background: #9b65ff90;
            color: #e0e0e0;
        }

        ul li:nth-child(4) a:hover{
            background: var(--header-text-color-hover);
            color: #ffffff;
        }

        &:not(.active){
            opacity: 0;
            user-select: none;
            pointer-events: none;
        }
    }

    @media only screen and (max-width: 580px){
        top: var(--mobile-Header-height);
        height: calc(100vh - var(--mobile-Header-height));
    }
`;

const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    a{
        padding: 7px 16px;
        border-radius: 6px;
        transition: var(--header-hover-animation-duraction);
    }

    a:hover{
        background-color: var(--header-background-color-hover);
    }

    a svg{
        width: 42px;
        height: 42px;
    }

    @media only screen and (max-width: 490px){
        gap: 2px;

        a{
            padding: 7px 12px;
        }    
    }
`;

const Humburguer = styled.button`
    position: relative;
    width: 42px;
    height: 36px;
    display: none;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    span{
        position: absolute;
        width: 100%;
        height: 5px;
        border-radius: 5px;
        background: #FFF;
        transition: 0.2s ease-in-out;
    }

    &:before{
        content: '';
        position: absolute;
        width: 100%;
        height: 5px;
        border-radius: 5px;
        background: #FFF;
        top: 0;
        transition: 0.2s ease-in-out;
    }

    &:after{
        content: '';
        position: absolute;
        width: 100%;
        height: 5px;
        border-radius: 5px;
        background: #FFF;
        bottom: 0;
        transition: 0.2s ease-in-out;
    }

    &.active span{
        opacity: 0;
    }

    &.active:before{
        transform: rotate(45deg);
        top: 16px;
    }

    &.active:after{
        transform: rotate(-45deg);
        bottom: 15px;
        transition: 0.2s ease-in-out;

    }

    @media only screen and (max-width: 780px){
        display: flex;
    }
`;

/* Button Login Style ---------------- */

const ContainerButtonLogin = styled.div`
    position: relative;
`;

const StyleButtonLogin = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 7px 16px;
    border-radius: 6px;
    transition: var(--header-hover-animation-duraction);

    &:hover{
        background-color: var(--header-background-color-hover);
    }

    img{
        width: 42px;
        height: 42px;
        border-radius: 50%;
    }
`;

const ModalButtonLogin = styled.div`
    position: Absolute;
    background: rgb(23, 23, 23);
    border: 4px solid rgba(255, 255, 255, 0.25);
    display: flex;
    flex-direction: column;
    width: 220px;
    left: -95px;
    top: 80px;
    transition: 0.1s;

    a,
    button{
        display: flex;
        justify-content: center;
        font-size: 17px;
        color: #FFF;
        text-decoration: none;
        font-weight: 600;
        border-radius: 0;
        padding: 10px;
        transition: 0.2s;
    }

    button{
        background: var(--header-text-color-hover);
        border: none;
        cursor: pointer;
    }

    button:hover{
        background: var(--header-background-color-hover);
        color: var(--Secundary-text-color);
    }

    a:hover{
        background-color: rgba(255, 255, 255, 0.15);
    }

    &:not(.active){
        user-select: none;
        pointer-events: none;
        opacity: 0;
    }
`;