import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardSection = () => {
    const intervalRef = useRef<number | null>(null);

    const Components = {
        backBtn: useRef<HTMLButtonElement>(null),
        nextBtn: useRef<HTMLButtonElement>(null),
        cardsList: useRef<HTMLUListElement>(null),
        buttonsCardList: useRef<HTMLUListElement>(null),
    }

    function ChangeCard(card: number){
        if(Components.cardsList.current && Components.buttonsCardList.current){
            const listItems = Components.cardsList.current.querySelectorAll('li');
            const ListCardList = Components.buttonsCardList.current.querySelectorAll('li');
            
            if(card - 1 > listItems.length || card < 0) return window.alert('Número de card maior/menor que a lista atual');
            if(listItems.item(card -1).classList.contains('active')) return; //O usuário clicou no mesmo card atual mostrado
            
            stopInterval();

            for(let i = 0; i < listItems.length; i++){ //Tirando todos do visível 
                listItems.item(i).className = "";
                ListCardList.item(i).className = "";
            }

            listItems.item((card - 1)).className = "visible";
            ListCardList.item((card - 1)).className = "active";

            startInterval();
        }else{
            window.alert('Erro ao mudar de card. Tente novamente.');
        }
    }

    const startInterval = () => {
        intervalRef.current = setInterval(() => {
            if(Components.cardsList.current && Components.buttonsCardList.current){
                const listItems = Components.cardsList.current.querySelectorAll('li');
                const ListCardList = Components.buttonsCardList.current.querySelectorAll('li');

                let currentCard = null;

                for(let i = 0; i < listItems.length; i++){ //Tirando todos do visível 
                    if(listItems.item(i).classList.contains('visible')){
                        currentCard = i;
                    }
                }
                
                if(currentCard == null) return;

                listItems.item(currentCard).className = "";
                ListCardList.item(currentCard).className = "";

                console.log(currentCard);
                console.log(listItems.length);
                
                if(currentCard >= listItems.length - 1){
                    listItems.item(0).className = "visible";
                    ListCardList.item(0).className = "active"; 
                }else{
                    listItems.item(currentCard + 1).className = "visible";
                    ListCardList.item(currentCard + 1).className = "active";
                }
            }
        }, 10100);
    };

    const stopInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null; // Limpa a referência
        }
    };

    useEffect(() => {
        startInterval();
    
        // Limpa o intervalo ao desmontar o componente
        return () => stopInterval();
    }, []);

    useEffect(() => {
        return () => stopInterval(); //Limpando ao desmontar
    }, [intervalRef]);

    return(
        <CardsSection>
                <ul className="CardsView" ref={Components.cardsList}>
                    <li className="visible">
                        <div className="inside">
                            <CardForComputer>
                                <img src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=94,width=960/CurationAssets/Solo%20Leveling/SEASON%202/ULTRA-WIDE/SoloLeveling-S2-KV1-UW-LTR.png" alt="animephoto" />
                            </CardForComputer>
                            <CardForMobile>
                                <img src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=94,width=420/CurationAssets/Solo%20Leveling/SEASON%202/ULTRA-WIDE/SoloLeveling-S2-KV1-UW-Tall-Cropped.png" alt="animephoto" />
                            </CardForMobile>
                            <CardActions>
                                <img className="animeLogo" src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/CurationAssets/Solo%20Leveling/SEASON%202/ULTRA-WIDE/SoloLeveling-S2-KV1-UW-Logo.png" alt="animeLogo" />
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M20 1C20 0.447715 20.4477 0 21 0C21.5523 0 22 0.447715 22 1V2H23C23.5523 2 24 2.44772 24 3C24 3.55228 23.5523 4 23 4H22V5C22 5.55228 21.5523 6 21 6C20.4477 6 20 5.55228 20 5V4H19C18.4477 4 18 3.55228 18 3C18 2.44772 18.4477 2 19 2H20V1Z"/><path d="M21.1936 8.07463C21.7016 7.85776 22.297 8.09138 22.4668 8.6169C23.145 10.7148 23.1792 12.9766 22.5523 15.1064C21.8308 17.5572 20.2788 19.6804 18.1626 21.1117C16.0464 22.5429 13.498 23.193 10.9548 22.9502C8.41165 22.7075 6.03225 21.5871 4.22503 19.7814C2.4178 17.9757 1.29545 15.5972 1.05062 13.0542C0.805783 10.5112 1.45373 7.96227 2.88325 5.84491C4.31277 3.72755 6.43471 2.17379 8.88488 1.4503C11.0142 0.821568 13.2759 0.853957 15.3744 1.53036C15.9001 1.69979 16.1342 2.29501 15.9178 2.80311C15.7013 3.31122 15.1136 3.54496 14.5846 3.38623C12.9184 2.88626 11.1353 2.8783 9.4532 3.37498C7.45004 3.96647 5.71522 5.23677 4.5465 6.96784C3.37778 8.69891 2.84804 10.7828 3.04821 12.8619C3.24838 14.9409 4.16596 16.8855 5.64348 18.3618C7.121 19.8381 9.06631 20.754 11.1455 20.9525C13.2247 21.1509 15.3082 20.6195 17.0383 19.4493C18.7684 18.2792 20.0373 16.5433 20.6271 14.5397C21.1224 12.8572 21.113 11.074 20.6116 9.40826C20.4525 8.87941 20.6857 8.29149 21.1936 8.07463Z"/><path d="M7.71054 9.14472L7.29441 9.35279C6.69971 9.65014 5.99999 9.21769 5.99999 8.55279C5.99999 8.214 6.1914 7.9043 6.49441 7.75279L7.78884 7.10557C7.9277 7.03615 8.08081 7 8.23605 7H8.99999C9.55227 7 9.99999 7.44772 9.99999 8V16C9.99999 16.5523 9.55227 17 8.99999 17C8.4477 17 7.99999 16.5523 7.99999 16V9.32361C7.99999 9.17493 7.84352 9.07823 7.71054 9.14472Z"/><path fillRule="evenodd" clipRule="evenodd" d="M12 9C12 7.89543 12.8954 7 14 7H17C17.5523 7 18 7.44772 18 8C18 8.55229 17.5523 9 17 9H14.2C14.0895 9 14 9.08954 14 9.2V10.8C14 10.9105 14.0895 11 14.2 11H16C17.1046 11 18 11.8954 18 13V15C18 16.1046 17.1046 17 16 17H14C12.8954 17 12 16.1046 12 15V9ZM14 14C14 14.5523 14.4477 15 15 15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13C14.4477 13 14 13.4477 14 14Z"/></svg>
                                    <Language>
                                            {/* Colocar condição se tiver ou não dublado */}
                                            Dub | leg
                                    </Language>
                                </div>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellendus rem eveniet, ipsum nemo ea beatae vel suscipit asperiores voluptas delectus? Illo delectus sit consectetur a ipsam? Alias, recusandae aut?</span>
                                <div>
                                    <Link to={'/'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M5.46484 3.92349C4.79896 3.5739 4 4.05683 4 4.80888V19.1911C4 19.9432 4.79896 20.4261 5.46483 20.0765L19.1622 12.8854C19.8758 12.5108 19.8758 11.4892 19.1622 11.1146L5.46484 3.92349ZM2 4.80888C2 2.55271 4.3969 1.10395 6.39451 2.15269L20.0919 9.34382C22.2326 10.4677 22.2325 13.5324 20.0919 14.6562L6.3945 21.8473C4.39689 22.8961 2 21.4473 2 19.1911V4.80888Z"/></svg>
                                        Começar a assistir E1
                                    </Link>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="bookmark"><rect width="24" height="24" opacity="0"/><path d="M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z"/></g></g></svg>
                                    </button>
                                </div>
                            </CardActions>
                        </div>
                    </li>
                    <li className="">
                        <div className="inside">
                            <CardForComputer>
                                <img src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=94,width=960/keyart/G24H1N3MP-backdrop_wide" alt="animephoto" />
                            </CardForComputer>
                            <CardForMobile>
                                <img src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=94,width=840,height=1260/keyart/G24H1N3MP-backdrop_tall" alt="animephoto" />
                            </CardForMobile>
                            <CardActions>
                                <img className="animeLogo" src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/G24H1N3MP-title_logo-en-us" alt="animeLogo" />
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M20 1C20 0.447715 20.4477 0 21 0C21.5523 0 22 0.447715 22 1V2H23C23.5523 2 24 2.44772 24 3C24 3.55228 23.5523 4 23 4H22V5C22 5.55228 21.5523 6 21 6C20.4477 6 20 5.55228 20 5V4H19C18.4477 4 18 3.55228 18 3C18 2.44772 18.4477 2 19 2H20V1Z"/><path d="M21.1936 8.07463C21.7016 7.85776 22.297 8.09138 22.4668 8.6169C23.145 10.7148 23.1792 12.9766 22.5523 15.1064C21.8308 17.5572 20.2788 19.6804 18.1626 21.1117C16.0464 22.5429 13.498 23.193 10.9548 22.9502C8.41165 22.7075 6.03225 21.5871 4.22503 19.7814C2.4178 17.9757 1.29545 15.5972 1.05062 13.0542C0.805783 10.5112 1.45373 7.96227 2.88325 5.84491C4.31277 3.72755 6.43471 2.17379 8.88488 1.4503C11.0142 0.821568 13.2759 0.853957 15.3744 1.53036C15.9001 1.69979 16.1342 2.29501 15.9178 2.80311C15.7013 3.31122 15.1136 3.54496 14.5846 3.38623C12.9184 2.88626 11.1353 2.8783 9.4532 3.37498C7.45004 3.96647 5.71522 5.23677 4.5465 6.96784C3.37778 8.69891 2.84804 10.7828 3.04821 12.8619C3.24838 14.9409 4.16596 16.8855 5.64348 18.3618C7.121 19.8381 9.06631 20.754 11.1455 20.9525C13.2247 21.1509 15.3082 20.6195 17.0383 19.4493C18.7684 18.2792 20.0373 16.5433 20.6271 14.5397C21.1224 12.8572 21.113 11.074 20.6116 9.40826C20.4525 8.87941 20.6857 8.29149 21.1936 8.07463Z"/><path d="M7.71054 9.14472L7.29441 9.35279C6.69971 9.65014 5.99999 9.21769 5.99999 8.55279C5.99999 8.214 6.1914 7.9043 6.49441 7.75279L7.78884 7.10557C7.9277 7.03615 8.08081 7 8.23605 7H8.99999C9.55227 7 9.99999 7.44772 9.99999 8V16C9.99999 16.5523 9.55227 17 8.99999 17C8.4477 17 7.99999 16.5523 7.99999 16V9.32361C7.99999 9.17493 7.84352 9.07823 7.71054 9.14472Z"/><path fillRule="evenodd" clipRule="evenodd" d="M12 9C12 7.89543 12.8954 7 14 7H17C17.5523 7 18 7.44772 18 8C18 8.55229 17.5523 9 17 9H14.2C14.0895 9 14 9.08954 14 9.2V10.8C14 10.9105 14.0895 11 14.2 11H16C17.1046 11 18 11.8954 18 13V15C18 16.1046 17.1046 17 16 17H14C12.8954 17 12 16.1046 12 15V9ZM14 14C14 14.5523 14.4477 15 15 15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13C14.4477 13 14 13.4477 14 14Z"/></svg>
                                    <Language>
                                            {/* Colocar condição se tiver ou não dublado */}
                                            Dub | leg
                                    </Language>
                                </div>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellendus rem eveniet, ipsum nemo ea beatae vel suscipit asperiores voluptas delectus? Illo delectus sit consectetur a ipsam? Alias, recusandae aut?</span>
                                <div>
                                    <Link to={'/'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M5.46484 3.92349C4.79896 3.5739 4 4.05683 4 4.80888V19.1911C4 19.9432 4.79896 20.4261 5.46483 20.0765L19.1622 12.8854C19.8758 12.5108 19.8758 11.4892 19.1622 11.1146L5.46484 3.92349ZM2 4.80888C2 2.55271 4.3969 1.10395 6.39451 2.15269L20.0919 9.34382C22.2326 10.4677 22.2325 13.5324 20.0919 14.6562L6.3945 21.8473C4.39689 22.8961 2 21.4473 2 19.1911V4.80888Z"/></svg>
                                        Começar a assistir E1
                                    </Link>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="bookmark"><rect width="24" height="24" opacity="0"/><path d="M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z"/></g></g></svg>
                                    </button>
                                </div>
                            </CardActions>
                        </div>
                    </li>
                    <li className="">
                        <div className="inside">
                            <CardForComputer>
                                <img src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=94,width=960/keyart/GW4HM7WK9-backdrop_wide" alt="animephoto" />
                            </CardForComputer>
                            <CardForMobile>
                                <img src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=94,width=840,height=1260/keyart/GW4HM7WK9-backdrop_tall" alt="animephoto" />
                            </CardForMobile>
                            <CardActions>
                                <img className="animeLogo" src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/GW4HM7WK9-title_logo-en-us" alt="animeLogo" />
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M20 1C20 0.447715 20.4477 0 21 0C21.5523 0 22 0.447715 22 1V2H23C23.5523 2 24 2.44772 24 3C24 3.55228 23.5523 4 23 4H22V5C22 5.55228 21.5523 6 21 6C20.4477 6 20 5.55228 20 5V4H19C18.4477 4 18 3.55228 18 3C18 2.44772 18.4477 2 19 2H20V1Z"/><path d="M21.1936 8.07463C21.7016 7.85776 22.297 8.09138 22.4668 8.6169C23.145 10.7148 23.1792 12.9766 22.5523 15.1064C21.8308 17.5572 20.2788 19.6804 18.1626 21.1117C16.0464 22.5429 13.498 23.193 10.9548 22.9502C8.41165 22.7075 6.03225 21.5871 4.22503 19.7814C2.4178 17.9757 1.29545 15.5972 1.05062 13.0542C0.805783 10.5112 1.45373 7.96227 2.88325 5.84491C4.31277 3.72755 6.43471 2.17379 8.88488 1.4503C11.0142 0.821568 13.2759 0.853957 15.3744 1.53036C15.9001 1.69979 16.1342 2.29501 15.9178 2.80311C15.7013 3.31122 15.1136 3.54496 14.5846 3.38623C12.9184 2.88626 11.1353 2.8783 9.4532 3.37498C7.45004 3.96647 5.71522 5.23677 4.5465 6.96784C3.37778 8.69891 2.84804 10.7828 3.04821 12.8619C3.24838 14.9409 4.16596 16.8855 5.64348 18.3618C7.121 19.8381 9.06631 20.754 11.1455 20.9525C13.2247 21.1509 15.3082 20.6195 17.0383 19.4493C18.7684 18.2792 20.0373 16.5433 20.6271 14.5397C21.1224 12.8572 21.113 11.074 20.6116 9.40826C20.4525 8.87941 20.6857 8.29149 21.1936 8.07463Z"/><path d="M7.71054 9.14472L7.29441 9.35279C6.69971 9.65014 5.99999 9.21769 5.99999 8.55279C5.99999 8.214 6.1914 7.9043 6.49441 7.75279L7.78884 7.10557C7.9277 7.03615 8.08081 7 8.23605 7H8.99999C9.55227 7 9.99999 7.44772 9.99999 8V16C9.99999 16.5523 9.55227 17 8.99999 17C8.4477 17 7.99999 16.5523 7.99999 16V9.32361C7.99999 9.17493 7.84352 9.07823 7.71054 9.14472Z"/><path fillRule="evenodd" clipRule="evenodd" d="M12 9C12 7.89543 12.8954 7 14 7H17C17.5523 7 18 7.44772 18 8C18 8.55229 17.5523 9 17 9H14.2C14.0895 9 14 9.08954 14 9.2V10.8C14 10.9105 14.0895 11 14.2 11H16C17.1046 11 18 11.8954 18 13V15C18 16.1046 17.1046 17 16 17H14C12.8954 17 12 16.1046 12 15V9ZM14 14C14 14.5523 14.4477 15 15 15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13C14.4477 13 14 13.4477 14 14Z"/></svg>
                                    <Language>
                                            {/* Colocar condição se tiver ou não dublado */}
                                            Dub | leg
                                    </Language>
                                </div>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellendus rem eveniet, ipsum nemo ea beatae vel suscipit asperiores voluptas delectus? Illo delectus sit consectetur a ipsam? Alias, recusandae aut?</span>
                                <div>
                                    <Link to={'/'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M5.46484 3.92349C4.79896 3.5739 4 4.05683 4 4.80888V19.1911C4 19.9432 4.79896 20.4261 5.46483 20.0765L19.1622 12.8854C19.8758 12.5108 19.8758 11.4892 19.1622 11.1146L5.46484 3.92349ZM2 4.80888C2 2.55271 4.3969 1.10395 6.39451 2.15269L20.0919 9.34382C22.2326 10.4677 22.2325 13.5324 20.0919 14.6562L6.3945 21.8473C4.39689 22.8961 2 21.4473 2 19.1911V4.80888Z"/></svg>
                                        Começar a assistir E1
                                    </Link>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="bookmark"><rect width="24" height="24" opacity="0"/><path d="M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z"/></g></g></svg>
                                    </button>
                                </div>
                            </CardActions>
                        </div>
                    </li>
                    <li className="">
                        <div className="inside">
                            <CardForComputer>
                                <img src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=94,width=960/keyart/G0XHWM1EK-backdrop_wide" alt="animephoto" />
                            </CardForComputer>
                            <CardForMobile>
                                <img src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=94,width=840,height=1260/keyart/G0XHWM1EK-backdrop_tall" alt="animephoto" />
                            </CardForMobile>
                            <CardActions>
                                <img className="animeLogo" src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/G0XHWM1EK-title_logo-en-us" alt="animeLogo" />
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M20 1C20 0.447715 20.4477 0 21 0C21.5523 0 22 0.447715 22 1V2H23C23.5523 2 24 2.44772 24 3C24 3.55228 23.5523 4 23 4H22V5C22 5.55228 21.5523 6 21 6C20.4477 6 20 5.55228 20 5V4H19C18.4477 4 18 3.55228 18 3C18 2.44772 18.4477 2 19 2H20V1Z"/><path d="M21.1936 8.07463C21.7016 7.85776 22.297 8.09138 22.4668 8.6169C23.145 10.7148 23.1792 12.9766 22.5523 15.1064C21.8308 17.5572 20.2788 19.6804 18.1626 21.1117C16.0464 22.5429 13.498 23.193 10.9548 22.9502C8.41165 22.7075 6.03225 21.5871 4.22503 19.7814C2.4178 17.9757 1.29545 15.5972 1.05062 13.0542C0.805783 10.5112 1.45373 7.96227 2.88325 5.84491C4.31277 3.72755 6.43471 2.17379 8.88488 1.4503C11.0142 0.821568 13.2759 0.853957 15.3744 1.53036C15.9001 1.69979 16.1342 2.29501 15.9178 2.80311C15.7013 3.31122 15.1136 3.54496 14.5846 3.38623C12.9184 2.88626 11.1353 2.8783 9.4532 3.37498C7.45004 3.96647 5.71522 5.23677 4.5465 6.96784C3.37778 8.69891 2.84804 10.7828 3.04821 12.8619C3.24838 14.9409 4.16596 16.8855 5.64348 18.3618C7.121 19.8381 9.06631 20.754 11.1455 20.9525C13.2247 21.1509 15.3082 20.6195 17.0383 19.4493C18.7684 18.2792 20.0373 16.5433 20.6271 14.5397C21.1224 12.8572 21.113 11.074 20.6116 9.40826C20.4525 8.87941 20.6857 8.29149 21.1936 8.07463Z"/><path d="M7.71054 9.14472L7.29441 9.35279C6.69971 9.65014 5.99999 9.21769 5.99999 8.55279C5.99999 8.214 6.1914 7.9043 6.49441 7.75279L7.78884 7.10557C7.9277 7.03615 8.08081 7 8.23605 7H8.99999C9.55227 7 9.99999 7.44772 9.99999 8V16C9.99999 16.5523 9.55227 17 8.99999 17C8.4477 17 7.99999 16.5523 7.99999 16V9.32361C7.99999 9.17493 7.84352 9.07823 7.71054 9.14472Z"/><path fillRule="evenodd" clipRule="evenodd" d="M12 9C12 7.89543 12.8954 7 14 7H17C17.5523 7 18 7.44772 18 8C18 8.55229 17.5523 9 17 9H14.2C14.0895 9 14 9.08954 14 9.2V10.8C14 10.9105 14.0895 11 14.2 11H16C17.1046 11 18 11.8954 18 13V15C18 16.1046 17.1046 17 16 17H14C12.8954 17 12 16.1046 12 15V9ZM14 14C14 14.5523 14.4477 15 15 15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13C14.4477 13 14 13.4477 14 14Z"/></svg>
                                    <Language>
                                            {/* Colocar condição se tiver ou não dublado */}
                                            Dub | leg
                                    </Language>
                                </div>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellendus rem eveniet, ipsum nemo ea beatae vel suscipit asperiores voluptas delectus? Illo delectus sit consectetur a ipsam? Alias, recusandae aut?</span>
                                <div>
                                    <Link to={'/'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M5.46484 3.92349C4.79896 3.5739 4 4.05683 4 4.80888V19.1911C4 19.9432 4.79896 20.4261 5.46483 20.0765L19.1622 12.8854C19.8758 12.5108 19.8758 11.4892 19.1622 11.1146L5.46484 3.92349ZM2 4.80888C2 2.55271 4.3969 1.10395 6.39451 2.15269L20.0919 9.34382C22.2326 10.4677 22.2325 13.5324 20.0919 14.6562L6.3945 21.8473C4.39689 22.8961 2 21.4473 2 19.1911V4.80888Z"/></svg>
                                        Começar a assistir E1
                                    </Link>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="bookmark"><rect width="24" height="24" opacity="0"/><path d="M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z"/></g></g></svg>
                                    </button>
                                </div>
                            </CardActions>
                        </div>
                    </li>
                    <li className="">
                        <div className="inside">
                            <CardForComputer>
                                <img src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=94,width=960/keyart/GZJH3D719-backdrop_wide" alt="animephoto" />
                            </CardForComputer>
                            <CardForMobile>
                                <img src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=94,width=840,height=1260/keyart/GZJH3D719-backdrop_tall" alt="animephoto" />
                            </CardForMobile>
                            <CardActions>
                                <img className="animeLogo" src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/GZJH3D719-title_logo-en-us" alt="animeLogo" />
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M20 1C20 0.447715 20.4477 0 21 0C21.5523 0 22 0.447715 22 1V2H23C23.5523 2 24 2.44772 24 3C24 3.55228 23.5523 4 23 4H22V5C22 5.55228 21.5523 6 21 6C20.4477 6 20 5.55228 20 5V4H19C18.4477 4 18 3.55228 18 3C18 2.44772 18.4477 2 19 2H20V1Z"/><path d="M21.1936 8.07463C21.7016 7.85776 22.297 8.09138 22.4668 8.6169C23.145 10.7148 23.1792 12.9766 22.5523 15.1064C21.8308 17.5572 20.2788 19.6804 18.1626 21.1117C16.0464 22.5429 13.498 23.193 10.9548 22.9502C8.41165 22.7075 6.03225 21.5871 4.22503 19.7814C2.4178 17.9757 1.29545 15.5972 1.05062 13.0542C0.805783 10.5112 1.45373 7.96227 2.88325 5.84491C4.31277 3.72755 6.43471 2.17379 8.88488 1.4503C11.0142 0.821568 13.2759 0.853957 15.3744 1.53036C15.9001 1.69979 16.1342 2.29501 15.9178 2.80311C15.7013 3.31122 15.1136 3.54496 14.5846 3.38623C12.9184 2.88626 11.1353 2.8783 9.4532 3.37498C7.45004 3.96647 5.71522 5.23677 4.5465 6.96784C3.37778 8.69891 2.84804 10.7828 3.04821 12.8619C3.24838 14.9409 4.16596 16.8855 5.64348 18.3618C7.121 19.8381 9.06631 20.754 11.1455 20.9525C13.2247 21.1509 15.3082 20.6195 17.0383 19.4493C18.7684 18.2792 20.0373 16.5433 20.6271 14.5397C21.1224 12.8572 21.113 11.074 20.6116 9.40826C20.4525 8.87941 20.6857 8.29149 21.1936 8.07463Z"/><path d="M7.71054 9.14472L7.29441 9.35279C6.69971 9.65014 5.99999 9.21769 5.99999 8.55279C5.99999 8.214 6.1914 7.9043 6.49441 7.75279L7.78884 7.10557C7.9277 7.03615 8.08081 7 8.23605 7H8.99999C9.55227 7 9.99999 7.44772 9.99999 8V16C9.99999 16.5523 9.55227 17 8.99999 17C8.4477 17 7.99999 16.5523 7.99999 16V9.32361C7.99999 9.17493 7.84352 9.07823 7.71054 9.14472Z"/><path fillRule="evenodd" clipRule="evenodd" d="M12 9C12 7.89543 12.8954 7 14 7H17C17.5523 7 18 7.44772 18 8C18 8.55229 17.5523 9 17 9H14.2C14.0895 9 14 9.08954 14 9.2V10.8C14 10.9105 14.0895 11 14.2 11H16C17.1046 11 18 11.8954 18 13V15C18 16.1046 17.1046 17 16 17H14C12.8954 17 12 16.1046 12 15V9ZM14 14C14 14.5523 14.4477 15 15 15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13C14.4477 13 14 13.4477 14 14Z"/></svg>
                                    <Language>
                                            {/* Colocar condição se tiver ou não dublado */}
                                            Dub | leg
                                    </Language>
                                </div>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellendus rem eveniet, ipsum nemo ea beatae vel suscipit asperiores voluptas delectus? Illo delectus sit consectetur a ipsam? Alias, recusandae aut?</span>
                                <div>
                                    <Link to={'/'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M5.46484 3.92349C4.79896 3.5739 4 4.05683 4 4.80888V19.1911C4 19.9432 4.79896 20.4261 5.46483 20.0765L19.1622 12.8854C19.8758 12.5108 19.8758 11.4892 19.1622 11.1146L5.46484 3.92349ZM2 4.80888C2 2.55271 4.3969 1.10395 6.39451 2.15269L20.0919 9.34382C22.2326 10.4677 22.2325 13.5324 20.0919 14.6562L6.3945 21.8473C4.39689 22.8961 2 21.4473 2 19.1911V4.80888Z"/></svg>
                                        Começar a assistir E1
                                    </Link>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="bookmark"><rect width="24" height="24" opacity="0"/><path d="M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z"/></g></g></svg>
                                    </button>
                                </div>
                            </CardActions>
                        </div>
                    </li>
                </ul>
                <ContainerViewAllCards>
                    <ul ref={Components.buttonsCardList}>
                        <li className="active"><button onClick={() => ChangeCard(1)}><span></span></button></li>
                        <li><button onClick={() => ChangeCard(2)}><span></span></button></li>
                        <li><button onClick={() => ChangeCard(3)}><span></span></button></li>
                        <li><button onClick={() => ChangeCard(4)}><span></span></button></li>
                        <li><button onClick={() => ChangeCard(5)}><span></span></button></li>
                    </ul>
                </ContainerViewAllCards>
        </CardsSection>
    );
};

const CardsSection = styled.div`
    position: relative;
    width: 100%;
    height: 75vh;
    min-height: 490px; //Evitar erros de estilo do componente quando o height for menor (Em casos de aparelhos mobile)
    display: flex;
    align-items: center;
    justify-content: center;
    
    ul.CardsView{
        position: relative;
        list-style: none;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    ul.CardsView li{
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

    ul.CardsView li .inside{
        width: 100%;
        height: 100%;
        background-color: rgb(23, 23, 23);
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        /* font-size: 20vw;
        color: var(--header-text-color-hover); */
        /* text-shadow: #9b65ff 0px 0 100px; */

        overflow: hidden; /* Evitar que a imagem saia e o efeito do border-radius fiquei ruim */
    }

    ul.CardsView li:not(.visible){
        opacity: 0;
        pointer-events: none;
    }

    ul.CardsView li.visible{
        pointer-events: auto;
    }

    button.changeCard{
        position: absolute;
        padding: 40px 2px;
        cursor: pointer;
        border: none;
        background-color: transparent;
        /* margin: 0 1vw; */
        border-radius: 7px;

        display: none;
    }

    button.changeCard:nth-child(1){
        left: 6px;
    }

    button.changeCard:nth-child(2){
        right: 6px;
    }

    button.changeCard:hover{
        background-color: var(--header-background-color-hover);
    }

    button.changeCard svg{
        width: 70px;
        height: 70px;
        fill: #f0f0f0;
    }

    @media only screen and (max-width: 710px){
        height: 130vw;
        /* height: 750px; */

        ul.CardsView li{
            width: 100%;
            height: 100%;
            border-radius: 0px;
            padding: 0px;
        }

        ul.CardsView li .inside{
            border-radius: 0px;
            font-size: 80px;
            width: 100%;
            height: 100%;
            overflow: visible;
        }

        button.changeCard{
            border: 2px solid #fff;
            background-color: var(--header-background-color-hover);
        }
    }
`;

const CardForComputer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    img{
        position: absolute;
        object-fit: cover;
        height: 100%;
        width: 100%;
        pointer-events: none;
    }

    @media only screen and (max-width: 710px){
        display: none;
    }
`;

const CardForMobile = styled.div`
    display: none;

    @media only screen and (max-width: 710px){
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
    
        img{
            position: absolute;
            object-fit: cover;
            width: 100%;
            pointer-events: none;
            z-index: 0;
        }
    }

`;

const CardActions = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
    padding: 0 0 30px 30px;

    img{
        width: 30vw;
        pointer-events: none;
    }

    div:nth-child(2){
        display: flex;
        align-items: center;
        font-size: 16px;
        gap: 5px;
    }

    div:nth-child(2) svg{
        height: 25px;
        width: 25px;
        fill: red;
    }

    span{
        font-size: 15px;
        width: 340px;
        color: #FFF;
        margin: 5px 0;
    }

    div:nth-child(4){ /* Botões de ação */
        display: flex;
        align-items: center;
        gap: 15px;
    }

    div:nth-child(4) a{
        display: flex;
        align-items: center;
        gap: 6px;
        background: #FF640A;
        padding: 10.5px 20px;
        font-size: 18px;
        font-weight: 600;
        color: #FFf;
        border: 2px solid rgba(255, 255, 255, 0.25);
        background: var(--watch-button-background-color);
        border-radius: 5px;
        text-decoration: none;
    }
    
    div:nth-child(4) a svg{
        height: 25px;
        width: 25px;
        fill: #Fff;
    }

    div:nth-child(4) button{
        padding: 3px 4.5px;
        border: 3px solid var(--header-text-color-hover);
        border-radius: 5px;
        background: transparent;
        cursor: pointer;
    }
    
    div:nth-child(4) button svg{
        height: 35px;
        width: 35px;
        fill: var(--header-text-color-hover);
    }

    @media only screen and (max-width: 710px){
        align-items: center;
        gap: 10px;
        padding: 30px 0px 50px;

        img{
            width: 50vw;
        }

        span{
            display: none;
        }
    }
`;

const Language = styled.div`
    color: var(--submain-color);
    user-select: none;
    font-size: 16px;
`;

const ContainerViewAllCards = styled.div`
    position: absolute;
    bottom: 0;
    z-index: 1;

    ul{
        list-style: none;
        display: flex;
        gap: 5px;
    }

    ul li button{
        transition: 0.5s;
        width: 20px;
        height: 12px;
        border-radius: 5px;
        background: #6c2e7c;
        display: flex;
        overflow: hidden;
        border: none;
        cursor: pointer;
    }

    ul li button span{
        border-radius: 5px;
        height: 100%;
        width: 0%;
        background: #ffce69;
    }

    @keyframes ChangingCardAnimation{
        from{
            width: 0%;
        }
        to{
            width: 100%;
        }
    }

    ul li.active button{
        width: 70px;
    }

    ul li.active button span{
        width: 100%;
        animation: 10s linear ChangingCardAnimation;
    }

    @media only screen and (max-width: 710px){
        ul li button{
            width: 30px;
            height: 15px;
        }

        ul li.active button{
            width: 90px;
        }
    }
`;