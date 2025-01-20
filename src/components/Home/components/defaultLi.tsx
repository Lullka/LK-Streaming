import { Link } from "react-router-dom";
import styled from "styled-components";

interface props{
    keyProp: number
    link: string,
    img: string,
    animeName: string,
    DubLeg: boolean,
    NSeasons: number,
    NEpisodes: number,
    stars: string,
    starNumbers: string,
}
export const DefaultLi = ({keyProp, link, img, animeName, DubLeg, NSeasons, NEpisodes, stars, starNumbers}: props) => {
    return(
        <Container key={keyProp}>
            <Link to={link}>
                <CardContainer>
                    <BackCard>
                        <PaddingBackCard>
                            <img src={img} alt="Undefined"/>
                            <h4>{animeName}</h4>
                            <Language>
                                { DubLeg ? 
                                    "Dub | Leg"
                                    :
                                    "Legendado"
                                }
                            </Language>
                        </PaddingBackCard>
                    </BackCard>
                    <FrontCard>
                        <FrontImg style={{backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'auto'}}></FrontImg>
                        <FrontContents>
                            <h4>{animeName}</h4>
                            <SomeInfos>
                                <Classification>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M20 1C20 0.447715 20.4477 0 21 0C21.5523 0 22 0.447715 22 1V2H23C23.5523 2 24 2.44772 24 3C24 3.55228 23.5523 4 23 4H22V5C22 5.55228 21.5523 6 21 6C20.4477 6 20 5.55228 20 5V4H19C18.4477 4 18 3.55228 18 3C18 2.44772 18.4477 2 19 2H20V1Z"/><path d="M21.1936 8.07463C21.7016 7.85776 22.297 8.09138 22.4668 8.6169C23.145 10.7148 23.1792 12.9766 22.5523 15.1064C21.8308 17.5572 20.2788 19.6804 18.1626 21.1117C16.0464 22.5429 13.498 23.193 10.9548 22.9502C8.41165 22.7075 6.03225 21.5871 4.22503 19.7814C2.4178 17.9757 1.29545 15.5972 1.05062 13.0542C0.805783 10.5112 1.45373 7.96227 2.88325 5.84491C4.31277 3.72755 6.43471 2.17379 8.88488 1.4503C11.0142 0.821568 13.2759 0.853957 15.3744 1.53036C15.9001 1.69979 16.1342 2.29501 15.9178 2.80311C15.7013 3.31122 15.1136 3.54496 14.5846 3.38623C12.9184 2.88626 11.1353 2.8783 9.4532 3.37498C7.45004 3.96647 5.71522 5.23677 4.5465 6.96784C3.37778 8.69891 2.84804 10.7828 3.04821 12.8619C3.24838 14.9409 4.16596 16.8855 5.64348 18.3618C7.121 19.8381 9.06631 20.754 11.1455 20.9525C13.2247 21.1509 15.3082 20.6195 17.0383 19.4493C18.7684 18.2792 20.0373 16.5433 20.6271 14.5397C21.1224 12.8572 21.113 11.074 20.6116 9.40826C20.4525 8.87941 20.6857 8.29149 21.1936 8.07463Z"/><path d="M7.71054 9.14472L7.29441 9.35279C6.69971 9.65014 5.99999 9.21769 5.99999 8.55279C5.99999 8.214 6.1914 7.9043 6.49441 7.75279L7.78884 7.10557C7.9277 7.03615 8.08081 7 8.23605 7H8.99999C9.55227 7 9.99999 7.44772 9.99999 8V16C9.99999 16.5523 9.55227 17 8.99999 17C8.4477 17 7.99999 16.5523 7.99999 16V9.32361C7.99999 9.17493 7.84352 9.07823 7.71054 9.14472Z"/><path fillRule="evenodd" clipRule="evenodd" d="M12 9C12 7.89543 12.8954 7 14 7H17C17.5523 7 18 7.44772 18 8C18 8.55229 17.5523 9 17 9H14.2C14.0895 9 14 9.08954 14 9.2V10.8C14 10.9105 14.0895 11 14.2 11H16C17.1046 11 18 11.8954 18 13V15C18 16.1046 17.1046 17 16 17H14C12.8954 17 12 16.1046 12 15V9ZM14 14C14 14.5523 14.4477 15 15 15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13C14.4477 13 14 13.4477 14 14Z"/></svg>
                                    <span>{stars}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"/></svg>
                                    <span>&#40;{starNumbers}&#41;</span>
                                </Classification>
                                {
                                    NSeasons > 1 ?
                                    <p>{NSeasons} Temporadas</p>
                                    :
                                    <p>{NSeasons} Temporada</p>
                                }
                                {
                                    NEpisodes > 1 ?
                                    <p>{NEpisodes} Episódios</p>
                                    :
                                    <p>{NEpisodes} Episódio</p>
                                }
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quod exercitationem eos voluptas repellendus, illum reiciendis aut laborum eaque, architecto ratione dolores minima sed ipsa soluta possimus sapiente, vero autem!</span>
                            </SomeInfos>
                        </FrontContents>
                    </FrontCard>
                </CardContainer>
            </Link>
        </Container>
    )
};

const Container = styled.li`
    color: #Fff;
    font-size: 30px;

    a{
        text-decoration: none;
    }
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

const BackCard = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 5px;

    img{
        width: 16vw;
    }

    h4{
        font-size: 14px;
        color: #FFF;
        font-weight: 500;
    }

    @media only screen and (max-width: 950px){
        img{
            width: 18vw;
        }
    }

    @media only screen and (max-width: 800px){
        img{
            width: 22vw;
        }
    }

    @media only screen and (max-width: 590px){
        img{
            width: 26vw;
            min-width: 150px;
        }
    }

    @media only screen and (max-width: 480px){
        img{
            width: 41vw;
            min-width: 150px;
        }
    }
`;

const PaddingBackCard = styled.div`
    padding: 8px;
`;

const Language = styled.div`
    color: var(--submain-color);
    user-select: none;
    font-size: 13px;
`;

const FrontCard = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden; /* Evitar vazamento do blur da img */
    transition: 0.3s;
    opacity: 0;

    &:hover{
        opacity: 1;
    }
`;

const FrontImg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(4px);
`;

const FrontContents = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(14, 14, 14, 0.9);
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    h4{
        font-size: 16px;
        color: #FFF;
        font-weight: 500;
    }
`;

const SomeInfos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    p{
        font-size: 15px;
        color: var(--submain-color);
    }

    span{
        margin-top: 8px;
        font-size: 13px;
        color: #fff;    
    }
`;

const Classification = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;

    svg{
        width: 25px;
        height: 25px;
        fill: red;
    }

    svg:nth-child(3){
        width: 18px;
        height: 18px;
        fill: var(--submain-color);
    }

    span{
        font-size: 15px;
        color: var(--submain-color);
    }
`;