import styled from "styled-components";
import { InfoExtra } from "../extra/infoextra";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export const VideoPlayer = () => {
    const [VideoPlayerStatus, setVideoPlayerStatus] = useState<boolean>(true); /* False: paused */
    const [VideoLoading, setVideoLoading] = useState<boolean>(true);

    const Components = {
        player: useRef<HTMLVideoElement>(null)
    }

    function PlayPouse(){
        if(Components.player.current){
            if(Components.player.current.paused){
                setVideoPlayerStatus(true);
                Components.player.current.play();
            }else{
                setVideoPlayerStatus(false);
                Components.player.current.pause();
            }
        }
    };

    function Rewind(){
        if(Components.player.current){
            Components.player.current.currentTime -= 10;
        }
    };

    function Forward(){
        if(Components.player.current){
            Components.player.current.currentTime += 10;
        }
    };

    const Navigate = useNavigate();
    const Teste = true;
    

    useEffect(() => {
        alert('O player personalizado ainda está em faze de estilização e alguns estudos sobre como melhorar seu desempenho. Enquanto isso, apenas o player padrão está disponível')
    }, [])

    return(
        <Container>
            <VideoContainer>
                <PlayerContainer>
                    <Player>
                        <video controls  muted onWaiting={() => setVideoLoading(true)} onPlaying={() => setVideoLoading(false)} ref={Components.player} src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" autoPlay></video>
                    </Player>
                    <PlayerControls>
                        <TopControls>
                            <button onClick={() => Navigate(-1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"/><path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"/></svg>
                            </button>
                            {
                                Teste ? 
                                    <InfoExtra width="270px" height="50px" SVGSize="30px" fontSize="16px"/>
                                    :
                                    <></>
                            }
                        </TopControls>
                        <MiddleControls>
                            <button onClick={() => Rewind()}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" strokeWidth="3" stroke="#fff" fill="none"><polyline points="9.57 15.41 12.17 24.05 20.81 21.44" strokeLinecap="round"/><path fill="none" d="M26.93,41.41V23a.09.09,0,0,0-.16-.07s-2.58,3.69-4.17,4.78" strokeLinecap="round"/><rect fill="none" x="32.19" y="22.52" width="11.41" height="18.89" rx="5.7"/><path fill="none" d="M12.14,23.94a21.91,21.91,0,1,1-.91,13.25" strokeLinecap="round"/></svg>
                            </button>
                            <button className={VideoLoading ? "loading" : ""} onClick={() => PlayPouse()}>
                                {
                                    VideoLoading ? 
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M16 8.00023L18.3642 5.63609M5.63631 18.364L8.00026 16M17.6566 12H21M3 12H6.34315M12 6.34342L12 3M12 21L12 17.6569M8.00023 8.00023L5.63609 5.63609M18.364 18.364L16 16" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                        :
                                        VideoPlayerStatus ? 
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M5.163 3.819C5 4.139 5 4.559 5 5.4v13.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.655c.32.164.74.164 1.581.164h.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C8.861 3 8.441 3 7.6 3h-.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656zm9 0C14 4.139 14 4.559 14 5.4v13.2c0 .84 0 1.26.164 1.581a1.5 1.5 0 0 0 .655.655c.32.164.74.164 1.581.164h.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .655-.656c.164-.32.164-.74.164-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C17.861 3 17.441 3 16.6 3h-.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.655.656z"/></svg>
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z"/></svg>
                                }
                            </button>
                            <button onClick={() => Forward()}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M24 4C12.972292 4 4 12.972292 4 24C4 35.027708 12.972292 44 24 44C35.027708 44 44 35.027708 44 24C44 23.829342 43.998541 23.658332 43.994141 23.488281 A 1.5004834 1.5004834 0 0 0 40.994141 23.564453C40.997849 23.708404 41 23.854658 41 24C41 33.406292 33.406292 41 24 41C14.593708 41 7 33.406292 7 24C7 14.593708 14.593708 7 24 7C29.380908 7 34.158525 9.4960454 37.271484 13.384766L35.964844 13.154297 A 1.5003693 1.5003693 0 0 0 35.443359 16.109375L40.367188 16.976562 A 1.50015 1.50015 0 0 0 42.105469 15.759766L42.972656 10.835938 A 1.50015 1.50015 0 0 0 41.439453 9.0566406 A 1.50015 1.50015 0 0 0 40.019531 10.316406L39.771484 11.720703C36.109299 7.0253275 30.404348 4 24 4 z M 27.5 17C25.019 17 23 19.019 23 21.5L23 26.5C23 28.981 25.019 31 27.5 31C29.981 31 32 28.981 32 26.5L32 21.5C32 19.019 29.981 17 27.5 17 z M 19.595703 17.001953C19.49775 17.010188 19.399938 17.0305 19.304688 17.0625L16.304688 18.0625C15.649688 18.2815 15.295672 18.989531 15.513672 19.644531C15.732672 20.298531 16.439703 20.651547 17.095703 20.435547L18.449219 19.984375L18.449219 29.75C18.449219 30.44 19.009219 31 19.699219 31C20.390219 31 20.949219 30.440047 20.949219 29.748047L20.949219 18.248047C20.949219 17.846047 20.757641 17.469375 20.431641 17.234375C20.187141 17.058125 19.889563 16.97725 19.595703 17.001953 z M 27.5 19.5C28.603 19.5 29.5 20.397 29.5 21.5L29.5 26.5C29.5 27.603 28.603 28.5 27.5 28.5C26.397 28.5 25.5 27.603 25.5 26.5L25.5 21.5C25.5 20.398 26.397 19.5 27.5 19.5 z"/></svg>
                            </button>
                        </MiddleControls>
                        <BottomControls></BottomControls>
                    </PlayerControls>
                </PlayerContainer>
                <PostContainer>
                    <img src="https://i0.wp.com/ovicio.com.br/wp-content/uploads/2024/03/20240318-o-problema-dos-3-corpos-1-1024x576-1.jpg?resize=555%2C508&ssl=1" alt="poster" />
                </PostContainer>
            </VideoContainer>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 55.25vw;
`;

const VideoContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background: #000;
`;

const PostContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: none;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


    display: none; /* Player ainda em beta, portanto não está disponível sua customização */
`;

const PlayerContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const Player = styled.div`
    width: 100%;
    height: 100%;

    video{
        width: 100%;
        height: 100%;
    }

    video::-internal-media-controls-download-button {
        display:none;
    }

    video::-webkit-media-controls-enclosure {
        overflow:hidden;
    }

    video::-webkit-media-controls-panel {
        width: calc(100% + 30px); /* Adjust as needed */
    }
`;

const PlayerControls = styled.div`
    width: 100%;
    height: 100%;
    padding: 1vw;
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    top: 0;

    display: flex;
    justify-content: space-between;
    flex-direction: column;



    display: none; /* Player ainda em beta, portanto não está disponível sua customização */
`;

const TopControls = styled.div`
    display: flex;
    gap: 15px;

    button{
        width: 50px;
        height: 50px;
        border: none;
        background: transparent;
        cursor: pointer;
    }

    button svg{
        fill: #FFf;
    }
`;

const MiddleControls = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1vw;

    button{
        border: none;
        background: transparent;
        cursor: pointer;
    }

    button.loading{
        animation: 1s loading infinite ease-in-out;
    }

    @keyframes loading {
        to{
            transform: rotate(360deg)
        }
    }
    svg{
        width: 7vw;
        height: 7vw;
        fill: #fff;
    }

    svg:hover{
        fill: #fff;
    }
`;

const BottomControls = styled.div``;