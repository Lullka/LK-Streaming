import { useState } from "react";
import styled from "styled-components";

interface Props {
    setShowingModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalSerieEps = ({setShowingModal}: Props) => {
    const [showingSeasons, setshowingSeasons] = useState<boolean>(false);

    return(
        <Container>
            <ModalContainer>
                <Seasons>
                    <button 
                        className={showingSeasons ? "showing" : ""} 
                        onClick={() => setshowingSeasons(!showingSeasons)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-ios-downward"><rect width="24" height="24" opacity="0"/><path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z"/></g></g></svg>
                            T1 - O Vetor chegou
                    </button>
                    {
                        showingSeasons ? 
                        <SeasonsModal>
                            <li><button className="active"><span>T1 - O Vetor chegou</span><span>7 episódios</span></button></li>
                            <li><button><span>T2 - A camareia viu tudo</span><span></span>3 episódios</button></li>
                            <li><button><span>T3 - O fim do hotel?</span><span>10 episódios</span></button></li>
                        </SeasonsModal>
                        :
                        <></>
                    }
                </Seasons>
                <BtnCloseModal onClick={() => setShowingModal(false)}></BtnCloseModal>
            </ModalContainer>
        </Container>
    )
};

const Container = styled.div`
    position: fixed;
    left: 0;
    top: var(--Header-height);
    width: 100%;
    height: calc(100% - var(--Header-height)); 
    z-index: 2;
    background: rgba(14, 14, 14, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: auto;
    transition: 0.2s;

    @media only screen and (max-width: 580px){
        top: var(--mobile-Header-height); 
        height: calc(100% - var(--mobile-Header-height)); 
    }
`;

const BtnCloseModal = styled.button`
    position: absolute;
    right: -45px;
    top: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: transparent;
    border: none;
    transition: 0.2s;

    &:before{
        content:'';
        position: absolute;
        left: 0;
        width: 100%;
        height: 5px;
        background: #FFF;
        transform: rotate(45deg);
        border-radius: 5px;
    }

    &:after{
        content:'';
        position: absolute;
        left: 0;
        width: 100%;
        height: 5px;
        background: #FFF;
        transform: rotate(-45deg);
        border-radius: 5px;
    }

    @media only screen and (max-width: 830px){
        top: auto;
        right: auto;
        bottom: 5px;
        width: 50px;
        height: 50px;

        &:before{
            height: 4px;
        }

        &:after{
            height: 4px;
        }
    }
`;

const ModalContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: rgb(30, 32, 39);
    border-radius: 10px;

    width: 720px;
    height: 400px;

    span.bar{
        width: 100%;
        height: 2px;
        background: rgba(255, 255, 255, 0.5);
    }

    /* &:after{
        content:'';
        position: absolute;
        bottom: 10px;
        left: 0;
        content: '';
        width: 100%;
        height: 70px;
        background: linear-gradient(0deg, rgba(14,14,14,1) 45%, rgba(0,0,0,0) 100%);
    } */

    @media only screen and (max-width: 920px){
        h1{
            font-size: 25px;
        }
    }

    @media only screen and (max-width: 830px){
        width: 100%;
        height: 100%;
        border-radius: 0px;
        align-items: center;

        h1{
            font-size: 23px;
        }

        &:after{
            bottom: 40px;
        }
    }

    @media only screen and (max-width: 580px){

        h1{
            font-size: 20px;
        }

        &:after{
            bottom: 10px;
        }
    }
`;

const Seasons = styled.div`
    position: relative;
    padding: 20px 30px;
    width: 100%;
    background: rgb(39, 42, 48);
    border-radius: 9px 9px 0 0;
    
    svg{
        fill: #Fff;
        width: 25px;
        height: 25px;
        transition: var(--home-cards-hover);
    }

    button{
        transition: var(--home-cards-hover);
        font-size: 20px;
        cursor: pointer;
        background: transparent;
        border: none;
        font-weight: 600;
        color: #fff;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    button.showing{
        color: var(--Seriado-btn-season-list-hover-color);
    }

    button.showing svg{
        fill: var(--Seriado-btn-season-list-hover-color);
    }

    @media only screen and (max-width: 830px){
        border-radius: 0;
    }
`;

const SeasonsModal = styled.ul`
    position: absolute;
    list-style: none;
    display: flex;
    flex-direction: column;
    background: rgb(20, 21, 25);
    padding: 8px 0;
    max-width: 60%;

    li button{
        padding: 7px 10px;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        font-size: 17px;
    }

    li button span:nth-child(1){
        max-width: 70%;
        white-space: nowrap;                  
        overflow: hidden; 
        text-overflow: ellipsis;
    }

    li button:hover, 
    li button.active{
        background: rgb(30, 32, 39);
    }
`;