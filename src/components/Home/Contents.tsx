import styled from "styled-components"
import { GenerateNormalList } from "./components/generateNormalList";
import { WatchList } from "./components/generateWatchList";

export const Contents = () => {
    return(
        <Container>
            <WatchList
                listName="Continuar assistindo"
                CardsNumber={12}
            />
            <GenerateNormalList /* Apenas dados fixos. Futuramente os dados serão através de objeto */
                listName="Filmes recém lançados"
                CardsNumber={12}
                keyProp={1} 
                link={'/about'}
                img="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1024/catalog/crunchyroll/8a6279fc503fe64b451a0e63afc65828.jpg"
                animeName="The Quintessential Quintuplets"
                DubLeg={true}
                NSeasons={2}
                NEpisodes={12}
                stars="4.8"
                starNumbers="65.4K"
            />
            <GenerateNormalList /* Apenas dados fixos. Futuramente os dados serão através de objeto */
                listName="Séries recém lançadas"
                CardsNumber={12}
                keyProp={1} 
                link={'/about'}
                img="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1024/catalog/crunchyroll/757bae5a21039bac6ebace5de9affcd8.jpg"
                animeName="One Piece"
                DubLeg={true}
                NSeasons={2}
                NEpisodes={12}
                stars="4.8"
                starNumbers="65.4K"
            />
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    width: 100%;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 30px;
    z-index: 1;
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(0,212,255,0) 100%);;

    h2{
        margin-left: 3vw;
        color: white;
        font-size: 30px;
    }
`;