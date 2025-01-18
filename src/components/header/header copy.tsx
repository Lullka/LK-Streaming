import { useEffect, useState } from "react";
import { Link, useNavigate  } from "react-router-dom"
import styled from "styled-components"


const UseScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(window.pageYOffset);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.pageYOffset);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return scrollPosition;
};

export const Header = () => {
    const [URLPath, setURLPath] = useState<string>(window.location.pathname);
    const ScrollY = UseScrollPosition() >= 650 ? 'active' : '';
    const History = useNavigate();

    useEffect(() => {
        setURLPath(window.location.pathname);
    }, [History]);
    
    console.log(UseScrollPosition());
    
    return(
        <Container className={URLPath == "/browse" ? "homepage" + ScrollY : ""}>
            <Nav className={URLPath == "/browse" ? "homepage"+ ScrollY : ""}>
                <Left>
                    <Link to={'/'}><img src="/svg/lkLogo.svg" alt="Logo do Luka" /></Link>
                </Left>
                <Center>
                    <ul>
                        <li><Link to={'/browse'} className={URLPath == "/browse" ? "active" : ""}>Início</Link></li>
                        <li><Link to={'/about'} className={URLPath == "/films" ? "active" : ""}>Filmes</Link></li>
                        <li><Link to={'/about'} className={URLPath == "/series" ? "active" : ""}>Séries</Link></li>
                        <li><Link to={'/browse'} className={URLPath == "/portifolio" ? "active" : ""}>Portifólio</Link></li>
                    </ul>
                </Center>
                <Right>
                    <Link to={"/search"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none"><path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" strokeWidth="2" stroke="#fff" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </Link>
                    <Link to={"/account"}> <img src="/imgs/perfilPhoto.jpg" alt="User Photo" /> </Link>
                </Right>
            </Nav>
        </Container>
    )
}

const Container = styled.nav`
    width: 100%;
    position: relative;
    height: 0;
    transition: var(--header-changing-positon-transition-duraction);

    &:not(.homepage){
        height: var(--Header-height); /* Introduz o tamanho comun do header na parte superior da página */
    }
`;

const Nav = styled.nav`
    z-index: 2;
    backdrop-filter: blur(10px);
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 80vh;

    @media only screen and (min-height: 1475px){ /* Evitar header ultrapassar seu lugar acima de 1475px de height */
        top: 78vh;
    }


    &:not(.homepage){
        transition: var(--header-hover-animation-duraction);
        height: var(--Header-height); //Introduz o tamanho comun do header na parte superior da página
        position: fixed;
        top: 0;
        background: linear-gradient(170deg, rgba(102, 16, 242, 0.2) 18%, rgba(60, 0, 136, 0) 40%), linear-gradient(336deg, rgba(111, 66, 193, .2) 8%, rgba(60, 0, 136, 0) 40.5%);
    }

    &:active{ /* Introduz o estilo padrão na página inicial quando o usuário scroll suficiente */
        height: var(--Header-height); //Introduz o tamanho comun do header na parte superior da página
        position: fixed;
        top: 0;
        background: linear-gradient(170deg, rgba(102, 16, 242, 0.2) 18%, rgba(60, 0, 136, 0) 40%), linear-gradient(336deg, rgba(111, 66, 193, .2) 8%, rgba(60, 0, 136, 0) 40.5%);
    }

    img{
        width: 60px;
        height: 60px;
    }

    img:active{
        filter: grayscale(15%);
    }
`;

const Left = styled.div`
    display: flex;
    align-items: center;
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

    a img{
        width: 42px;
        height: 42px;
        border-radius: 50%;
    }
`;