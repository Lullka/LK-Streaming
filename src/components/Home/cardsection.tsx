import { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardSection = () => {
    const Components = {
        backBtn: useRef<HTMLButtonElement>(null),
        nextBtn: useRef<HTMLButtonElement>(null),
        cardsList: useRef<HTMLUListElement>(null),
    }


    let viewCardList = 0;

    function NextCard(){
        if(Components.cardsList.current){
            const listItems = Components.cardsList.current.querySelectorAll('li');
            const lenght = listItems.length;

            if(!(viewCardList >= (lenght - 1))){
                listItems.item(viewCardList).className = "";
                listItems.item(++viewCardList).className = "visible";
            }else{
                listItems.item(viewCardList).className = "";
                listItems.item(viewCardList = 0).className = "visible";
            }
        }
    }

    function PreviousCard(){
        if(Components.cardsList.current){
            const listItems = Components.cardsList.current.querySelectorAll('li');
            const lenght = listItems.length;

            if(!(viewCardList <= 0)){
                listItems.item(viewCardList).className = "";
                listItems.item(--viewCardList).className = "visible";
            }else{
                listItems.item(viewCardList).className = "";
                listItems.item(viewCardList = (lenght - 1)).className = "visible";
            }
        }
    }


    return(
        <CardsSection>
                <ul ref={Components.cardsList}>
                    <li className="visible">
                        <Link to={'/'}><div className="inside">L</div></Link>
                    </li>
                    <li>
                        <Link to={'/'}><div className="inside">u</div></Link>
                    </li>
                    <li>
                        <Link to={'/'}><div className="inside">k</div></Link>
                    </li>
                    <li>
                        <Link to={'/'}><div className="inside">a</div></Link>
                    </li>
                </ul>
                <button onClick={() => NextCard()}><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z"/></svg></button>
                <button onClick={() => PreviousCard()}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z"/></svg></button>
        </CardsSection>
    );
};

const CardsSection = styled.section`
    position: relative:
    width: 100%;
    height: 75vh;
    
    ul{
        position: relative;
        list-style: none;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    ul li{
        position: absolute;
        width: 80%;
        height: 85%;
        border-radius: 20px;
        padding: 5px;
        background-color: rgba(255, 255, 255, 0.15);
        transition: 0.6s;
        user-select: none;
        pointer-events: none;
    }

    ul li a{
        text-decoration: none;
    }

    ul li .inside{
        width: 100%;
        height: 100%;
        background-color: rgb(23, 23, 23);
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20vw;
        color: var(--header-text-color-hover);
        text-shadow: #9b65ff 0px 0 100px;
    }

    ul li:not(.visible){
        opacity: 0;
        pointer-events: auto;
    }

    button{
        position: absolute;
        padding: 40px 2px;
        cursor: pointer;
        border: none;
        background-color: transparent;
        top: 32.4vh;
        margin: 0 1vw;
        border-radius: 7px;
    }

    button:nth-child(2){
        right: 0;
    }

    button:hover{
        background-color: var(--header-background-color-hover);
    }

    button svg{
        width: 70px;
        height: 70px;
        fill: #f0f0f0;
    }
`;