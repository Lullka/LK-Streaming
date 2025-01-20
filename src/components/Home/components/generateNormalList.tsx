import styled from "styled-components";
import { DefaultLi } from "./defaultLi";

interface props{
    listName: string,
    CardsNumber: number, /* Para ambiente de teste */
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

export const GenerateNormalList = ({listName, CardsNumber, keyProp, link, img, animeName, DubLeg, NSeasons, NEpisodes, stars, starNumbers}: props) => {
    
    
    return(
        <Container key={keyProp}>
            <h2>{listName}</h2>
            <ul>
                {Array.from({ length: CardsNumber }, (_, index) => (
                    <DefaultLi
                        keyProp={index} 
                        link={link}
                        img={img}
                        animeName={animeName}
                        DubLeg={DubLeg}
                        NSeasons={NSeasons}
                        NEpisodes={NEpisodes}
                        stars={stars}
                        starNumbers={starNumbers}
                    />
                ))}
            </ul>
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    h2{
        color: white;
        font-size: 30px;
    }

    ul{
        list-style: none;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 20px;
        overflow-x: auto;
        padding: 1vw 3vw 10px 2.4vw;
    }

    ul::-webkit-scrollbar{
        width: 100%;
        height: 10px;
    }

    ul::-webkit-scrollbar-track {
        background: #0f0f0f;
    }

    ul::-webkit-scrollbar-thumb {
        background: #282828;
    }

    ul::-webkit-scrollbar-thumb:active{
        background: #1b1b1b;
    }

    @media only screen and (max-width: 590px){
        ul{
            gap: 0px;
            padding: 1vw 3vw 10px 1vw;
        }
    }
`;