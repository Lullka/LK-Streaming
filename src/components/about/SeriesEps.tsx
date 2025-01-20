import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SerieEps = () => {
    const [SeasonModal, setSeasonModal] = useState<boolean>(false);

    return(
        <Container>
            <Seasons>
                <button onClick={() => setSeasonModal(!SeasonModal)} className={SeasonModal ? "seasonList desactive" : "seasonList"}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-ios-downward"><rect width="24" height="24" opacity="0"/><path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z"/></g></g></svg>
                    <h4>Temporada 1</h4>
                </button>
                <SeasonsModal className={SeasonModal ? "" : "desactive"}>
                    <button className="active"><span>Temporada 1</span><span>&#40;7 episódios&#41;</span></button>
                    <button><span>Temporada 2</span><span>&#40;10 episódios&#41;</span></button>
                    <button><span>Temporada 3</span><span>&#40;9 episódios&#41;</span></button>
                    <button><span>Temporada 4</span><span>&#40;8 episódios&#41;</span></button>
                </SeasonsModal>
            </Seasons>
            <Episode>
                <ul>
                    {Array.from({ length: 12 }, (_, index) => (
                        <li key={index}>
                            <Link to="/">
                                <CardEpisode>
                                    <img
                                        src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/33e6a8e90a15d3f7d1b619a03d663b31.jpg"
                                        alt={`Episode ${index + 1}`}
                                    />
                                    <h4>Episode {index + 1}</h4>
                                    <span>Leg | Dub</span>
                                </CardEpisode>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Episode>
        </Container>
    )
};

const Container = styled.div`
    padding: 15px 60px 0 60px;
`;

const Seasons = styled.div`
    position: relative;

    button.seasonList{
        display: flex;
        align-items: center;
        gap: 10px;
        background-color: transparent;
        cursor: pointer;
        color: white;
        border: none;
        padding: 8px 4px;
        transition: var(--default-hover-duraction);
        width: 270px;
    }

    button.seasonList h4{
        font-size: 25px;
    }

    button.seasonList:hover{
        color: var(--Seriado-btn-season-list-hover-color);
    }
    
    button.seasonList:hover svg{
        fill: var(--Seriado-btn-season-list-hover-color);
    }

    button.seasonList.desactive{
        background-color: var(--modal-default-background-color);
    }

    button.seasonList.desactive svg{
        transform: rotate(180deg);
    }

    button svg{
        transition: var(--default-hover-duraction);
        width: 30px;
        height: 30px;
        fill: #fff;
    }
`;
const SeasonsModal = styled.div`
    position: absolute;
    width: 270px;
    background-color: var(--modal-default-background-color);
    display: flex;
    flex-direction: column;
    transition: var(--default-hover-duraction);
    padding: 0 0 8px 0;

    &.desactive{
        pointer-events: none;
        opacity: 0;
    }

    button{
        height: 35px;
        display: flex;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 10px;
        border: none;
        background-color: transparent;
        cursor: pointer;
        color: var(--Secundary-text-color);
        font-weight: 600;
        font-size: 16px;
    }

    button:hover,
    button.active{
        background-color: #0d0d0f;
    }
`;

const Episode = styled.div`
    height: 300px;
    user-select: none;
    
    ul{
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 1vw;
    }
    
    ul a{
        text-decoration: none;
    }
`;

const CardEpisode = styled.div`
    width: 21vw;
    padding: 0.4vw;
    display: flex;
    flex-direction: column;
    gap: 0.2vw;

    img{
        height: 100%;
        width: 100%;
        pointer-events: none;
    }

    h4{
        color: white;
    }
        
    span{
        color: var(--Secundary-text-color);
        font-weight: 600;
    }
    &:hover{
        background-color: rgba(255, 255, 255, 0.06);
    }
`;