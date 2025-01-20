import { Link } from "react-router-dom";
import styled from "styled-components";

interface props{
    keyProp: number
    
}


export const DefaultWatchCard = ({keyProp}: props) => {
    return(
        <Container key={keyProp}>
            <Link to={'/watch'}>
                <div className="BackCardWatching">
                    <CardCW>
                        <img src="https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/ee4d1756-b3f8-48d6-9e2c-b9e5d9cba6eb/237ef83d-93f4-42e9-b7c7-fdb19e045eb2?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=2000" alt="Serie Name photo" />
                        <ContainerProgressiveBar>
                            <div className="bar"></div>
                        </ContainerProgressiveBar>
                    </CardCW>
                    <CardInfo className="MoreInfos">
                        <Link to={'/about'}>Doutor House</Link>
                        <h3>T2 E{keyProp + 1} - O jogo</h3>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quas accusamus quod sequi quidem incidunt vitae sunt?</span>
                        <span>Continuar T2 E{keyProp + 1}</span>
                    </CardInfo>
                </div>
            </Link>
        </Container>
    )
};

const Container = styled.li`
    transition: 0.1s;

    &:hover{
        transform: scale(1.1);
    }

    a{
        text-decoration: none;
        user-select: none;
    }

    a .BackCardWatching{
        padding: 2px;
        background: rgba(255, 255, 255, 0.15);
        border-radius: 11px;
        position: relative;
        overflow: hidden;
    }

    a .BackCardWatching .MoreInfos{
        transition: 80ms;
        opacity: 0;
    }

    &:hover a .BackCardWatching .MoreInfos{
        opacity: 1;
    }
`;

const CardCW = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    align-items: center;

    img{
        width: 22vw;
        pointer-events: none;
    }

    @media only screen and (max-width: 1000px){
        img{
            width: 32vw;
        }
    }

    @media only screen and (max-width: 900px){
        img{
            width: 37vw;
            min-width: 300px;
        }
    }

    @media only screen and (max-width: 780px){
        img{
            width: 43vw;
            min-width: 310px;
        }
    }

    @media only screen and (max-width: 710px){
        img{
            width: 40vw;
            min-width: 260px;
        }
    }

    @media only screen and (max-width: 590px){
        img{
            width: 43vw;
            min-width: 230px;
        }
    }
`;

const ContainerProgressiveBar = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 5px;
    background-color: rgb(15, 15, 15);

    .bar{
        width: 50%;
        height: 100%;
        background: var(--continueWatching-bar-color);
    }
`;

const CardInfo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(15, 15, 15);
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 4px;

    a{
        font-size: 1vw;
        color: var(--Secundary-text-color);
    }

    a:hover{
        text-decoration: underline;
    }

    h3{
        color: #FFF;
        font-weight: 600;
        font-size: 1.5vw;
    }

    span:nth-child(3){
        color: #FFF;
        font-size: 0.95vw;
    }

    span:nth-child(4){
        position: absolute;
        bottom: 10px;
        color: var(--header-text-color-hover);
        font-weight: 600;
        font-size: 1.5vw;
    }

    @media only screen and (max-width: 1000px){
        a{
            font-size: 14px;
        }

        h3{
            font-size: 20px;
        }

        span:nth-child(3){
            font-size: 14px;
        }

        span:nth-child(4){
            font-size: 20px;
        }
    }

    @media only screen and (max-width: 740px){
        a{
            font-size: 12px;
        }

        h3{
            font-size: 18px;
        }

        span:nth-child(3){
            font-size: 12px;
        }

        span:nth-child(4){
            font-size: 18px;
        }
    }

    @media only screen and (max-width: 580px){
        a{
            font-size: 10px;
        }

        h3{
            font-size: 16px;
        }

        span:nth-child(3){
            font-size: 10px;
        }

        span:nth-child(4){
            font-size: 16px;
        }
    }
`;