import styled from "styled-components";
import { DefaultWatchCard } from "./defaultWatchCard";

interface props{
    listName: string,
    CardsNumber: number, /* Para ambiente de teste */
}

export const WatchList = ({listName, CardsNumber}: props) => {
    return(
        <Container>
            <h2>{listName}</h2>
            <ul>
                {Array.from({ length: CardsNumber }, (_, index) => (
                    <DefaultWatchCard
                        keyProp={index}
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

    ul{
        list-style: none;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 1vw 3vw 10px 3vw;
        overflow-x: auto;
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
`;