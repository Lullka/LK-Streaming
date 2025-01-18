import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { InfoExtra } from "../extra/infoextra";

export const LoadInfosSeriado = () => {
    const [OpenCloseDescription, setOpenCloseDescription] = useState<boolean>(false);

    const components = {
        description: useRef<HTMLDivElement>(null),
    };

    return(
        <Container>
            <InfosActionContainer>
                <InfoContents>
                    <h1>O problema dos 3 corpos</h1>
                    <Classification>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M20 1C20 0.447715 20.4477 0 21 0C21.5523 0 22 0.447715 22 1V2H23C23.5523 2 24 2.44772 24 3C24 3.55228 23.5523 4 23 4H22V5C22 5.55228 21.5523 6 21 6C20.4477 6 20 5.55228 20 5V4H19C18.4477 4 18 3.55228 18 3C18 2.44772 18.4477 2 19 2H20V1Z"/><path d="M21.1936 8.07463C21.7016 7.85776 22.297 8.09138 22.4668 8.6169C23.145 10.7148 23.1792 12.9766 22.5523 15.1064C21.8308 17.5572 20.2788 19.6804 18.1626 21.1117C16.0464 22.5429 13.498 23.193 10.9548 22.9502C8.41165 22.7075 6.03225 21.5871 4.22503 19.7814C2.4178 17.9757 1.29545 15.5972 1.05062 13.0542C0.805783 10.5112 1.45373 7.96227 2.88325 5.84491C4.31277 3.72755 6.43471 2.17379 8.88488 1.4503C11.0142 0.821568 13.2759 0.853957 15.3744 1.53036C15.9001 1.69979 16.1342 2.29501 15.9178 2.80311C15.7013 3.31122 15.1136 3.54496 14.5846 3.38623C12.9184 2.88626 11.1353 2.8783 9.4532 3.37498C7.45004 3.96647 5.71522 5.23677 4.5465 6.96784C3.37778 8.69891 2.84804 10.7828 3.04821 12.8619C3.24838 14.9409 4.16596 16.8855 5.64348 18.3618C7.121 19.8381 9.06631 20.754 11.1455 20.9525C13.2247 21.1509 15.3082 20.6195 17.0383 19.4493C18.7684 18.2792 20.0373 16.5433 20.6271 14.5397C21.1224 12.8572 21.113 11.074 20.6116 9.40826C20.4525 8.87941 20.6857 8.29149 21.1936 8.07463Z"/><path d="M7.71054 9.14472L7.29441 9.35279C6.69971 9.65014 5.99999 9.21769 5.99999 8.55279C5.99999 8.214 6.1914 7.9043 6.49441 7.75279L7.78884 7.10557C7.9277 7.03615 8.08081 7 8.23605 7H8.99999C9.55227 7 9.99999 7.44772 9.99999 8V16C9.99999 16.5523 9.55227 17 8.99999 17C8.4477 17 7.99999 16.5523 7.99999 16V9.32361C7.99999 9.17493 7.84352 9.07823 7.71054 9.14472Z"/><path fillRule="evenodd" clipRule="evenodd" d="M12 9C12 7.89543 12.8954 7 14 7H17C17.5523 7 18 7.44772 18 8C18 8.55229 17.5523 9 17 9H14.2C14.0895 9 14 9.08954 14 9.2V10.8C14 10.9105 14.0895 11 14.2 11H16C17.1046 11 18 11.8954 18 13V15C18 16.1046 17.1046 17 16 17H14C12.8954 17 12 16.1046 12 15V9ZM14 14C14 14.5523 14.4477 15 15 15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13C14.4477 13 14 13.4477 14 14Z"/></svg>
                        <Language>
                            {/* Colocar condição se tiver ou não dublado */}
                            Dublado | legendado
                        </Language>
                    </Classification>
                    <InfoExtra width="270px" height="50px" SVGSize="30px" fontSize="16px"/>
                    <Actions>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="bookmark"><rect width="24" height="24" opacity="0"/><path d="M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z"/></g></g></svg>
                            Adicionar à fila
                        </button>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title/><g id="Complete"><g data-name="add" id="add-2"><g><line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="19" y2="5"/><line fill="none"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="5" x2="19" y1="12" y2="12"/></g></g></g></svg>
                            Adicionar à lista
                        </button>
                    </Actions>
                    <ContainerDescription>
                        <Description ref={components.description} className={OpenCloseDescription ? "showing" : ""}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur odit doloremque beatae, voluptatum quasi laboriosam? Facere odio rem doloribus, corporis alias nisi, necessitatibus aperiam, labore sequi eos magnam possimus?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vel dolore nihil natus accusantium, fugiat ullam quaerat repudiandae pariatur, ducimus aliquam maiores porro iste quidem nam quos debitis. Quos, exercitationem.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quibusdam culpa perferendis, quo magni qui eius similique mollitia commodi doloremque possimus harum voluptate sunt laboriosam, sapiente laudantium atque eligendi neque!
                        </Description>
                        <button onClick={() => {
                                setOpenCloseDescription(!OpenCloseDescription);
                            }}>
                                {
                                    OpenCloseDescription ? "Mostrar menos" : "Mostrar mais"
                                }
                            </button>
                    </ContainerDescription>
                    <MoreAbout></MoreAbout>
                </InfoContents>
                <ContainerToWatch>
                    <h3>Assistir episódio 1</h3>
                    <Link to={'/watch'}>
                        <ButtonWatch>
                            <img src="https://i0.wp.com/ovicio.com.br/wp-content/uploads/2024/03/20240318-o-problema-dos-3-corpos-1-1024x576-1.jpg?resize=555%2C508&ssl=1" alt="photoFilm" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z"/></svg>
                        </ButtonWatch>
                    </Link>
                </ContainerToWatch>
            </InfosActionContainer>
        </Container>
    );
};

const Container = styled.div`
    padding: 30px 60px 0 60px;
`;

const InfosActionContainer = styled.div`
    display: flex;
`;

const InfoContents = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media only screen and (min-width: 890px){
        width: 56vw;
    }

    h1{
        text-transform: uppercase;
        color: #Fff;
        font-weight: 600;
    }
`;

const Classification = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    svg{
        fill: var(--Seriado-Age-color-16);
        width: 30px;
        height: 30px;
    }
`;

const Language = styled.div`
    color: var(--submain-color);
    user-select: none;
    font-size: 16px;
`;

const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 10px;

    button{
        padding: 5px 20px;
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 19px;
        font-weight: bold;
        color: #Fff;
        background: transparent;
        border: 3px solid var(--Seriado-add-to-list-border-color);
        cursor: pointer;
        user-select: none;
        border-radius: 5px;
    }

    button:nth-child(2){
        color: #A0A0A0;
        border: 3px solid transparent;
    }

    button:nth-child(2):hover{
        background-color: #141519;
        border: 3px solid #141519;
    }

    button svg{
        fill: var(--Seriado-add-to-list-border-color);
        width: 35px;
        height: 35px;
    }

    button:nth-child(2) svg{
        stroke: #A0A0A0;
    }
`;

const Description = styled.div`
    position: relative;
    text-align: justify;
    color: var(--description-font-color);
    overflow: hidden;

    &:not(.showing):before{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 30px;
        background: linear-gradient(0deg, rgba(0,0,0,1) 30%, transparent 100%)
    }

    &:not(.showing){
        height: 100px;
    }
`;

const ContainerDescription = styled.div`
    button{
        font-size: 18px;
        border: none;
        padding: 5px 10px;
        margin-left: -10px;
        background-color: transparent;
        color: var(--Seriado-add-to-list-border-color);
        font-weight: 700;
        cursor: pointer;
    }
`;

const MoreAbout = styled.div``;

const ContainerToWatch = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    color: #ccb7ff;
    font-size: 30px;


    @media only screen and (min-width: 890px){
        margin-top: 10px;
        width: 44vw;
    }
`;

const ButtonWatch = styled.div`
    position: relative;
    width: 360px;
    height: 220px;
    background: black;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: transparent 0 0 90px 20px;
    transition: 0.3s;
    
    &:hover{
        box-shadow: #9b65ff 0 0 50px 10px;
    }

    img{
        object-fit: cover;
        width: 100%;
        filter: blur(3px);
    }

    &:hover img{
        filter: blur(4px);
    }

    svg{ 
        position: absolute;
        width: 100px;
        height: 100px;
        transition: 0.2s;
        fill: #Fff;
    }

    &:hover svg{
        fill: #d3d3d3;
    }
`;