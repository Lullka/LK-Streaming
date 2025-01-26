import { useState } from "react";
import styled from "styled-components";
import { ModalNewVideos } from "./modalNewVideos";

interface interfaceSize{
    width: string,
    height: string,
    fontSize: string,
    SVGSize: string
}

export const InfoExtra = (props: interfaceSize) => {
    const [ShowingModal, setShowingModal] = useState<boolean>(false);

    return(
        <>
            <Container onClick={() => setShowingModal(!ShowingModal)} style={{width: props.width, height: props.height}}>
                <svg style={{width: props.SVGSize, height: props.SVGSize}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet"><path d="M52 2H12C6.477 2 2 6.477 2 12v40c0 5.523 4.477 10 10 10h40c5.523 0 10-4.477 10-10V12c0-5.523-4.477-10-10-10zM21 39h-2.553l-5.084-9.131V39H11V25h2.477l5.16 9.348V25H21v14zm14 0H25V25h9.75v2.367h-7.096v3.104h6.6v2.359h-6.6v3.808H35V39zm16.668 0H48.73l-2.729-10.467L43.279 39h-3.004L37 25h2.836l2.068 9.615L44.41 25h3.293l2.404 9.779L52.213 25H55l-3.332 14z"/></svg>
                <span style={{fontSize: props.fontSize}}>Lançamento na plataforma!</span>
            </Container>
            {ShowingModal 
                ?
                <ModalNewVideos setShowingModal={setShowingModal}/>
                :
                <></>
            }
        </>
    );
};

const Container = styled.div`
    width: 270px;
    height: 50px;
    background: var(--Seriado-infos-extras); /* #141519 #6a2bff */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    gap: 10px;
    user-select: none;
    cursor: pointer;

    svg{
        fill: var(--Seriado-New);
        width: 30px;
        height: 30px;
        border-radius: 4px;
        padding: -2px;
    }

    span{
        color: #fff;
        font-weight: 500;
    }
`;