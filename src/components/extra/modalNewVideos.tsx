import styled from "styled-components";
/* import { MiniVideoCard } from "./miniVideoCard"; */

interface Props {
    setShowingModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalNewVideos = ({setShowingModal}: Props) => {
    return(
        <Container>
            <ModalContainer>
                <h1>Lançamentos na plataforma</h1>
                <span className="bar"></span>
                <ListCards>
                    {/* {Array.from({ length: 12 }, (_, index) => (
                        <MiniVideoCard index={index} minutes="2h 21m" svgSize="22px" minutesSize="15px"/>
                    ))} */}
                </ListCards>
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

    @media only screen and (max-width: 850px){
        top: auto;
        right: auto;
        bottom: 5px;
        width: 50px;
        height: 50px;
        z-index: 1;

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
    background: rgb(20, 21, 25);
    padding: 30px 50px;
    border-radius: 10px;
    width: 700px;

    span.bar{
        width: 100%;
        height: 2px;
        background: rgba(255, 255, 255, 0.5);
    }

    &:after{
        content:'';
        position: absolute;
        bottom: 10px;
        left: 0;
        content: '';
        width: 100%;
        height: 70px;
        background: linear-gradient(0deg, rgb(20, 21, 25) 45%, rgba(0,0,0,0) 100%);
    }

    @media only screen and (max-width: 920px){
        h1{
            font-size: 25px;
        }
    }

    @media only screen and (max-width: 850px){
        width: 100%;
        height: 100%;
        padding: 30px 50px 70px;
        border-radius: 0px;
        display: flex;
        align-items: center;

        h1{
            font-size: 23px;
            width: 100%;

        }

        &:after{
            bottom: 40px;
        }
    }

    @media only screen and (max-width: 580px){
        padding: 30px 20px;

        h1{
            font-size: 20px;
        }

        &:after{
            bottom: 10px;
        }
    }
`;

const ListCards = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 50vh;
    overflow: auto;
    margin-top: 5px;
    padding-bottom: 25px; /* Evitar efeito da sombra ficar sobre o card */

    li:hover{
        background: rgb(30, 32, 39);
    }

    @media only screen and (max-width: 850px){
        height: 100%;
        width: 100%;
    }
`;