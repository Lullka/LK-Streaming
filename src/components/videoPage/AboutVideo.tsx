import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MiniVideoCard } from "../extra/miniVideoCard";
import { ModalSerieEps } from "../extra/modalSerieEp";

interface LikeStyle{
    like: boolean,
    dislike: boolean,
    likes: number,
    dislikes: number,
}
export const AboutVideo = () => {
    const [showMoreEps, setShowMoreEps] = useState<boolean>(false);
    const [ObjectLike, setObjectLike] = useState<LikeStyle>({
        like: false,
        dislike: false,
        likes: 416,
        dislikes: 17,
    });
    const [ShowingModal, setShowingModal] = useState<boolean>(false);
    const [ModalMobileMoreEps, setModalMobileMoreEps] = useState<boolean>(false);

    /* Simples função apenas para o funcionamento dos botões de curtida */
    function ChangeLike(where: string){
        if(where == "like"){
            if(ObjectLike.like){
                setObjectLike((prev) => ({
                    ...prev,
                    like: false
                }))
            }else{
                setObjectLike((prev) => ({
                    ...prev,
                    like: true,
                    dislike: false
                }))
            }
        }

        if(where == "dislike"){
            if(ObjectLike.dislike){
                setObjectLike((prev) => ({
                    ...prev,
                    dislike: false
                }))
            }else{
                setObjectLike((prev) => ({
                    ...prev,
                    like: false,
                    dislike: true
                }))
            }
        }
    }

    function CopyURL(){
        window.alert('Código já escrito, apenas não aplicado até o momento')
        /* 
            var textArea = document.createElement("textarea");
            document.body.appendChild(textArea);
            textArea.select();

            try {
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
                console.log('Copying text command was ' + msg);
            } catch (err) {
                console.log('Oops, unable to copy');
                window.prompt("Copie para área de transferência: Ctrl+C e tecle Enter", text);
            }

            document.body.removeChild(textArea);
        */
    }
    
    return(
        <Container>
            <About>
                <TitleContainer>
                    <Title>
                        <Link to="/about"><h4>Serie Name</h4></Link>
                        <span>
                            4.6
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="star-svg" aria-labelledby="star-svg" aria-hidden="false" role="img"><title id="star-svg">Estrela de Avaliação</title><path d="M15.266 8.352L11.988 1.723 8.73 8.352 1.431 9.397 6.71 14.528 5.465 21.849 11.999 18.39 18.544 21.85 17.285 14.528 22.57 9.398z"></path></svg>
                            &#40;46.8K&#41;
                        </span>
                    </Title>
                    <AddToQueue>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="bookmark"><rect width="24" height="24" opacity="0"/><path d="M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z"/></g></g></svg>
                        </button>
                    </AddToQueue>
                </TitleContainer>
                <AboutThisEp>
                    <h2>E4 - Um mundo cheio de apostas</h2>
                    <BasicsInfos>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M20 1C20 0.447715 20.4477 0 21 0C21.5523 0 22 0.447715 22 1V2H23C23.5523 2 24 2.44772 24 3C24 3.55228 23.5523 4 23 4H22V5C22 5.55228 21.5523 6 21 6C20.4477 6 20 5.55228 20 5V4H19C18.4477 4 18 3.55228 18 3C18 2.44772 18.4477 2 19 2H20V1Z"/><path d="M21.1936 8.07463C21.7016 7.85776 22.297 8.09138 22.4668 8.6169C23.145 10.7148 23.1792 12.9766 22.5523 15.1064C21.8308 17.5572 20.2788 19.6804 18.1626 21.1117C16.0464 22.5429 13.498 23.193 10.9548 22.9502C8.41165 22.7075 6.03225 21.5871 4.22503 19.7814C2.4178 17.9757 1.29545 15.5972 1.05062 13.0542C0.805783 10.5112 1.45373 7.96227 2.88325 5.84491C4.31277 3.72755 6.43471 2.17379 8.88488 1.4503C11.0142 0.821568 13.2759 0.853957 15.3744 1.53036C15.9001 1.69979 16.1342 2.29501 15.9178 2.80311C15.7013 3.31122 15.1136 3.54496 14.5846 3.38623C12.9184 2.88626 11.1353 2.8783 9.4532 3.37498C7.45004 3.96647 5.71522 5.23677 4.5465 6.96784C3.37778 8.69891 2.84804 10.7828 3.04821 12.8619C3.24838 14.9409 4.16596 16.8855 5.64348 18.3618C7.121 19.8381 9.06631 20.754 11.1455 20.9525C13.2247 21.1509 15.3082 20.6195 17.0383 19.4493C18.7684 18.2792 20.0373 16.5433 20.6271 14.5397C21.1224 12.8572 21.113 11.074 20.6116 9.40826C20.4525 8.87941 20.6857 8.29149 21.1936 8.07463Z"/><path d="M7.71054 9.14472L7.29441 9.35279C6.69971 9.65014 5.99999 9.21769 5.99999 8.55279C5.99999 8.214 6.1914 7.9043 6.49441 7.75279L7.78884 7.10557C7.9277 7.03615 8.08081 7 8.23605 7H8.99999C9.55227 7 9.99999 7.44772 9.99999 8V16C9.99999 16.5523 9.55227 17 8.99999 17C8.4477 17 7.99999 16.5523 7.99999 16V9.32361C7.99999 9.17493 7.84352 9.07823 7.71054 9.14472Z"/><path fillRule="evenodd" clipRule="evenodd" d="M12 9C12 7.89543 12.8954 7 14 7H17C17.5523 7 18 7.44772 18 8C18 8.55229 17.5523 9 17 9H14.2C14.0895 9 14 9.08954 14 9.2V10.8C14 10.9105 14.0895 11 14.2 11H16C17.1046 11 18 11.8954 18 13V15C18 16.1046 17.1046 17 16 17H14C12.8954 17 12 16.1046 12 15V9ZM14 14C14 14.5523 14.4477 15 15 15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13C14.4477 13 14 13.4477 14 14Z"/></svg>
                        <Language>
                                {/* Colocar condição se tiver ou não dublado */}
                                Dublado | legendado
                        </Language>
                    </BasicsInfos>
                    <Release>Lançado em 10 de julho de 2025</Release>
                    <EvaluatorsContainer>
                        <EvaluatorButtons>
                            <button onClick={() => ChangeLike('like')} className={ObjectLike.like ? "active" : ""}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><g id="Icons"><path className="cls-1" d="M12.992,20.912l3.5,1.838A2.131,2.131,0,0,0,19.58,20.5l-.667-3.893a2.129,2.129,0,0,1,.613-1.887l2.828-2.757a2.131,2.131,0,0,0-1.181-3.635l-3.909-.568a2.133,2.133,0,0,1-1.6-1.166L13.911,3.056a2.131,2.131,0,0,0-3.822,0L8.341,6.6a2.133,2.133,0,0,1-1.6,1.166l-3.909.568a2.131,2.131,0,0,0-1.181,3.635l2.828,2.757a2.129,2.129,0,0,1,.613,1.887L4.42,20.5A2.131,2.131,0,0,0,7.512,22.75l3.5-1.838A2.135,2.135,0,0,1,12.992,20.912Z"/><path className="cls-2" d="M16.49,22.75l-3.5-1.84a2.162,2.162,0,0,0-1.98,0l-3.5,1.84A2.132,2.132,0,0,1,4.42,20.5l.55-3.18a2.114,2.114,0,0,0,2.54.43l3.5-1.84a2.162,2.162,0,0,1,1.98,0l3.5,1.84a2.114,2.114,0,0,0,2.54-.43l.55,3.18A2.132,2.132,0,0,1,16.49,22.75Z"/></g><g data-name="Layer 4" id="Layer_4"><path className="cls-3" d="M23.053,12.683a3.132,3.132,0,0,0-1.737-5.341l-3.909-.568a1.13,1.13,0,0,1-.851-.619L14.808,2.614a3.131,3.131,0,0,0-5.616,0L7.444,6.155a1.13,1.13,0,0,1-.851.619l-3.909.568A3.132,3.132,0,0,0,.947,12.684L3.776,15.44a1.131,1.131,0,0,1,.326,1l-.667,3.892a3.131,3.131,0,0,0,4.542,3.3l3.5-1.838a1.125,1.125,0,0,1,1.052,0h0l3.5,1.838a3.11,3.11,0,0,0,3.3-.239,3.109,3.109,0,0,0,1.245-3.063L19.9,16.441a1.13,1.13,0,0,1,.326-1Zm-4.226,1.325a3.131,3.131,0,0,0-.9,2.772l.667,3.892a1.131,1.131,0,0,1-1.642,1.193l-3.5-1.838a3.134,3.134,0,0,0-2.914,0l-3.5,1.838a1.131,1.131,0,0,1-1.642-1.193l.667-3.891a3.132,3.132,0,0,0-.9-2.773L2.344,11.251a1.132,1.132,0,0,1,.627-1.93L6.88,8.753A3.128,3.128,0,0,0,9.237,7.04L10.985,3.5a1.165,1.165,0,0,1,2.03,0L14.763,7.04A3.128,3.128,0,0,0,17.12,8.753l3.909.568a1.132,1.132,0,0,1,.627,1.93Z"/></g></svg>
                                <span>{ObjectLike.likes}</span>
                            </button>
                            <button onClick={() => ChangeLike('dislike')} className={ObjectLike.dislike ? "active" : ""}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path className="cls-1" d="M10.75 6L11.9369 3.15144V3.15144C11.9603 3.09535 12.0397 3.09535 12.0631 3.15144V3.15144L13.9872 7.76923C14.2977 8.51452 15.0259 9 15.8333 9H20.8931V9C20.9326 9 20.9523 9.04768 20.9244 9.07557L20.8931 9.10687L17.5 12.5" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path className="cls-2" d="M9 9H3.13547V9C3.08548 9 3.06044 9.06044 3.09579 9.09579L3.13547 9.13547L7.16787 13.1679C7.68147 13.6815 7.87625 14.4331 7.67671 15.1315L6.06393 20.7762L6.0564 20.8026C6.03711 20.8701 6.1124 20.9251 6.17083 20.8861V20.8861L10.8906 17.7396C11.5624 17.2917 12.4376 17.2917 13.1094 17.7396L17.8186 20.879L17.837 20.8913C17.8928 20.9285 17.9646 20.8761 17.9462 20.8117V20.8117L16.8571 17" stroke="#323232" stroke-width="2" stroke-linejoin="round"/><path className="cls-3" d="M3 3L21 21" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <span>{ObjectLike.dislikes}</span>
                            </button>
                        </EvaluatorButtons>
                        <ShareButton onClick={() => setShowingModal(true)}>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none"><g clipPath="url(#clip0_15_72)"><rect width="24" height="24" fill="none"/><circle className="cls-1" cx="7" cy="12" r="2" stroke="#fff" strokeLinejoin="round"/><circle className="cls-2" cx="17" cy="6" r="2" stroke="#fff" strokeLinejoin="round"/><path className="cls-3" d="M15 7L8.5 11" stroke="#fff"/><circle className="cls-4" cx="17" cy="18" r="2" stroke="#fff" strokeLinejoin="round"/><path className="cls-5" d="M8.5 13.5L15 17" stroke="#fff"/></g><defs><clipPath id="clip0_15_72"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
                            </button>
                        </ShareButton>
                    </EvaluatorsContainer>
                </AboutThisEp>
            </About>
            <Episodes>
                <div className="SpCard">
                    {
                        !showMoreEps ?
                        <>
                            <NextEp>
                                <span className="ContainerVideoCard">Próximo episódio</span>
                                <MiniVideoCard 
                                    index={1} 
                                    minutes="24m" 
                                    svgSize="22px" 
                                    minutesSize="15px"
                                />
                            </NextEp>
                            <PrevEp>
                                <span className="ContainerVideoCard">Episódio anterior</span>
                                <MiniVideoCard 
                                    index={1} 
                                    minutes="24m" 
                                    svgSize="22px" 
                                    minutesSize="15px"
                                />
                            </PrevEp>
                        </>
                        :
                        <>
                            <ListEpisodes>
                                <span className="ContainerVideoCard">Mais episódios</span>
                                {Array.from({ length: 12 }, (_, index) => (
                                    <MiniVideoCard 
                                        index={index} 
                                        minutes="24m" 
                                        svgSize="22px" 
                                        minutesSize="15px"
                                    />
                                ))}
                            </ListEpisodes>
                        </>
                    }
                </div>
                <button className="VDesktop" onClick={() => {setShowMoreEps(!showMoreEps)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 1024 1024"><path d="M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z"/></svg>
                    {
                        !showMoreEps ? 
                        "Mostrar episódios"
                        :
                        "Voltar"   
                    }
                </button>
                <button className="VMobile" onClick={() => {setModalMobileMoreEps(!ModalMobileMoreEps)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 1024 1024"><path d="M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z"/></svg>
                    {
                        !showMoreEps ? 
                        "Mostrar episódios"
                        :
                        "Voltar"   
                    }
                </button>
                {
                    ModalMobileMoreEps ?
                        <ModalSerieEps setShowingModal={setModalMobileMoreEps}/>
                    :
                    <></>
                }
            </Episodes>
            <ContainerModalShareEp className={ShowingModal ? "active" : ""}>
                <ModalShareEp>
                    <CloseModalButton onClick={() => setShowingModal(false)}></CloseModalButton>
                    <h1>Compartilhar</h1>
                    <LinkContent>
                        <span>http://192.168.118.242:5173/watch</span>
                        <button onClick={() => CopyURL()}>Copiar</button>
                    </LinkContent>
                </ModalShareEp>
            </ContainerModalShareEp>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    display: flex;
    padding: 10px 50px;
    justify-content: space-between;

    @media only screen and (max-width: 970px){
        flex-direction: column;
        gap: 10px;
    }

    @media only screen and (max-width: 570px){
        padding: 10px 40px;
    }

    @media only screen and (max-width: 570px){
        padding: 10px 20px;
    }
`;

const ContainerModalShareEp = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: rgba(0,0,0,0.3);
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    &:not(.active){
        display: none;
    }
`;

const ModalShareEp = styled.div`
    width: 520px;
    background: var(--modal-default-background-color);
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    padding: 25px 30px 50px;

    h1{
        color: #FFF;
    }
`;

const LinkContent = styled.div`
    padding: 15px 20px;
    width: 100%;
    background: var(--background-text-modal);
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflox-x: auto;
    overflow-y: visible;

    span{
        font-size: 18px;
        font-weight: 500;
        color: #bcbcbc;
    }

    button{
        position: relative;
        padding: 5px 10px;
        border: 2px solid var(--description-font-color);
        color: var(--description-font-color);
        background: transparent;
        font-size: 17px;
        font-weight: 600;
        cursor: pointer;
    }

    button:active{
        border: 2px solid var(--sucess);
        color: var(--sucess);
    }

    button:after{
        content: "Copiado!";
        position: absolute;
        background: var(--sucess);
        padding: 5px 10px;
        top: -50px;
        left: -10px;
        pointer-events: none;
        color: #fff;
    }

    button:before{
        content: "";
        position: absolute;
        width: 25px;
        height: 25px;
        background: var(--sucess);
        top: -40px;
        left: 24px;
        transform: rotate(45deg);
    }
`;

const CloseModalButton = styled.button`
    position: absolute;
    top: 0;
    right: -40px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    padding: 8px;
    cursor: pointer;

    &:before{
        content: "";
        position: absolute;
        width: 30px;
        height: 3px;
        border-radius: 50px;
        background: #FFF;
        z-index: 3;
        transform: rotate(45deg);
    }

    &:after{
        content: "";
        position: absolute;
        width: 30px;
        height: 3px;
        border-radius: 50px;
        background: #FFF;
        z-index: 3;
        transform: rotate(-45deg);
    }
`;

const About = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    width: 100%;
    padding: 0 20px 0 0;
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;

    a{
        text-decoration: none;
    }

    a h4{
        font-size: 18px;
        color: var(--Go-to-series-about);
    }

    span{
        font-weight: 500;
        display: flex;
        color: var(--Secundary-text-color);
        cursor: pointer;
    }

    span svg{
        width: 17px;
        height: 17px;
        fill: var(--Star-color);
    }

    span:hover,
    a:hover{
        text-decoration: underline;
    }

    @media only screen and (max-width: 520px){
        a h4{
            font-size: 16px;
        }
    }
`;

const AddToQueue = styled.div`
    button{
        width: 50px;
        height: 50px;
        cursor: pointer;
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 2px;
    }

    button svg{
        width: 100%;
        height: 100%;
        fill: var(--Seriado-add-to-list-border-color);
    }
`;

const AboutThisEp = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    
    h2{
        color: #FFF;
    }

    @media only screen and (max-width: 520px){
        h2{
            font-size: 22px;
        }
    }
`;

const BasicsInfos = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    svg{
        fill: var(--Seriado-Age-color-16);
        width: 27px;
        height: 27px;
    }

    @media only screen and (max-width: 520px){
        svg{
            width: 24px;
            height: 24px;
        }
    }
`;

const Language = styled.div`
    color: var(--submain-color);
    user-select: none;
    font-size: 16px;
    
    @media only screen and (max-width: 520px){
        font-size: 14px;
    }
`;

const Release = styled.span`
    color: #FFF; 

    @media only screen and (max-width: 520px){
        font-size: 15px;
    }
`;

const EvaluatorsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const EvaluatorButtons = styled.div`
    display: flex;
    gap: 10px;

    button{
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 17px;
        padding: 4px 10px 4px 0;
        border: none;
        background: transparent;
        color: #fff;
        cursor: pointer;
    }

    button svg{
        width: 35px;
        height: 35px;
    }

    /* -------------- Icone de like -------------------------------------------------------- */

    button:nth-child(1) .cls-1{
        fill: transparent;
        transition: var(--Like-Button-transition);
    }

    button:nth-child(1) .cls-2{
        fill: transparent;
        transition: var(--Like-Button-transition);
    }

    button:nth-child(1) .cls-3{
        fill: #Fff;
        transition: var(--Like-Button-transition);
    }

    button:nth-child(1):hover .cls-1{
        fill:#ffce69;
    }

    button:nth-child(1):hover .cls-2{
        fill:#f19b5f;
    }

    button:nth-child(1):hover .cls-3{
        fill:#6c2e7c;
    }

    button:nth-child(1).active .cls-1{
        fill:#ffce69;
    }

    button:nth-child(1).active .cls-2{
        fill:#f19b5f;
    }

    button:nth-child(1).active .cls-3{
        fill:#6c2e7c;
    }

    /* -------------- Icone de dislike -------------------------------------------------------- */

    button:nth-child(2) .cls-1{
        stroke: #Fff;
        transition: var(--Like-Button-transition);
    }

    button:nth-child(2) .cls-2{
        stroke: #Fff;
        transition: var(--Like-Button-transition);
    }

    button:nth-child(2) .cls-3{
        stroke: #Fff;
        transition: var(--Like-Button-transition);
    }

    button:nth-child(2):hover .cls-1{
        stroke:#ffce69;
    }

    button:nth-child(2):hover .cls-2{
        stroke:#f19b5f;
    }

    button:nth-child(2):hover .cls-3{
        stroke:#6c2e7c;
    }

    button:nth-child(2).active .cls-1{
        stroke:#ffce69;
    }

    button:nth-child(2).active .cls-2{
        stroke:#f19b5f;
    }

    button:nth-child(2).active .cls-3{
        stroke:#6c2e7c;
    }
`;

const ShareButton = styled.div`
    button{
        width: 55px;
        height: 55px;
        cursor: pointer;
        border: none;
        background: transparent;
        padding: 3px;
    }

    button svg{
        width: 100%;
        height: 100%;
    }

    button svg .cls-1{
        transition: 0.2s;
    }

    button svg .cls-2{
        transition: 0.2s;
    }

    button svg .cls-3{
        transition: 0.2s;
    }

    button svg .cls-4{
        transition: 0.2s;
    }

    button svg .cls-5{
        transition: 0.2s;
    }

    button:hover svg .cls-1{
        stroke: #6c2e7c;
    }

    button:hover svg .cls-2{
        stroke: #f19b5f;
    }

    button:hover svg .cls-3{
        stroke: #ffce69;
    }

    button:hover svg .cls-4{
        stroke: #ffce69;
    }

    button:hover svg .cls-5{
        stroke: #f19b5f;
    }
`;



const Episodes = styled.div`
    padding: 5px 0 0 0;
    min-width: 389px;/* evitar mudanças de posição quando o usuário interagir com mostrar mais episódios */

    span.ContainerVideoCard{
        font-size: 20px;
        color: #FFF;
        font-weight: 600;
    }

    button.VDesktop,
    button.VMobile{
        margin-top: 10px;
        display: flex;
        align-items: center;
        gap: 7px;
        font-size: 17px;
        font-weight: 600;
        padding: 4px 12px;
        border: 2px solid var(--description-font-color);
        background-color: transparent;
        color: var(--description-font-color);
        cursor: pointer;
        transition: var(--default-hover-duraction);
    }

    button.VDesktop svg,
    button.VMobile svg{
        width: 30px;
        height: 30px;
        fill: var(--description-font-color);
        transition: var(--default-hover-duraction);
    }

    button.VMobile{
        display: none;
    }

    button.VDesktop:hover,
    button.VMobile:hover{
        color: #f19b5f;
        border: 2px solid #f19b5f;
    }
    
    button.VDesktop:hover,
    button.VMobile:hover svg{
        fill: #f19b5f;
    }

    @media only screen and (max-width: 970px){
        button.VDesktop{
            display: none;
        }

        button.VMobile{
            display: flex;
        }

        div.SpCard{
            display: flex;
            justify-content: space-between;
        }
    }

    @media only screen and (max-width: 850px){
        div.controlImgCardSerie img{
            width: 170px;
        }
    }

    @media only screen and (max-width: 790px){
        div.controlImgCardSerie img{
            width: 160px;
        }
    }

    @media only screen and (max-width: 680px){
        div.SpCard{
            flex-direction: column;
        }

        span.ContainerVideoCard{
            span{
                font-size: 18px;
            }
        }

        div.controlImgCardSerie img{
            width: 180px;
        }
    }
`;

const NextEp = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    a{
        text-decoration: none;
    }
`;

const PrevEp = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 10px;

    a{
        text-decoration: none;
    }
`;

const ListEpisodes = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 306px;
    overflow-y: auto;
    overflow-x: hidden;

    a{
        text-decoration: none;
    }

    &::-webkit-scrollbar{
        width: 8px;
        height: 100%;
    }

    &::-webkit-scrollbar-track {
        background: #252835;
    }

    &::-webkit-scrollbar-thumb {
        background: #484d64;
        border-radius: 15px;
    }

    &::-webkit-scrollbar-thumb:hover{
        background: #747c9d;
    }

    &::-webkit-scrollbar-thumb:active{
        background: #626984;
    }
`;