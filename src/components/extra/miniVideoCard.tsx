import { Link } from "react-router-dom";
import styled from "styled-components";

interface props{
    index: number,
    svgSize: string,
    minutes: string,
    minutesSize: string,
}
export const MiniVideoCard = ({index, svgSize, minutes ,minutesSize} : props) => {
    return(
        <List key={index}>
            <Link to="/">
                <CardEp>
                    <CardEpPhoto className="controlImgCardSerie">
                        <img src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=320,height=180/catalog/crunchyroll/d3ce283e1b948937c240d94ac1f5d8c9.jpg" alt={`Imagem do episódio ${index + 1} da série Y`} />
                        <svg style={{width: svgSize, height: svgSize}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" data-t="rating-a14-svg" aria-labelledby="rating-a14-svg" aria-hidden="true" role="img"><title id="rating-a14-svg">Não recomendado para menores de 14 anos</title><path d="m62.37 4.31-.019-.035c-.363-1.252-1.451-2.322-2.74-2.685h-.035c-.345-.109-.762-.127-1.143-.127H5.604c-.326 0-.708.018-1.016.09h-.036c-1.67.345-3.012 1.96-3.084 3.647v22.186c0 10.195.018 20.734 0 31.11v.073c-.055.962.344 1.941 1.07 2.721.726.78 1.687 1.234 2.649 1.252h53.246c.29 0 .67-.018 1.016-.09 1.778-.418 3.174-2.177 3.084-3.919V6.977c-.018-.254 0-.507 0-.743.018-.69.036-1.36-.146-1.887l-.018-.036z" fill="#F58220"></path><path d="M5.61 0c.327 0 .635.018.98.036h50.906l.943-.018c.544 0 1.07.036 1.597.2 1.76.49 3.247 1.923 3.737 3.682.326.98.2 2.05.217 3.084v51.501c.11 2.485-1.814 4.826-4.208 5.388-.436.109-.89.127-1.343.127-.381 0-.78-.018-1.161-.018H5.175c-2.83-.055-5.297-2.667-5.17-5.497.018-17.76 0-35.537 0-53.315C.077 2.794 1.909.617 4.232.127 4.685.018 5.157 0 5.61 0zM58.44 1.451H5.611c-.327 0-.708.018-1.016.09h-.037c-1.669.346-3.011 1.96-3.084 3.647v26.024c.004 8.99.016 18.194 0 27.273v.073c-.054.961.345 1.94 1.07 2.72.726.781 1.688 1.234 2.65 1.253h53.245c.29 0 .671-.019 1.016-.091 1.778-.417 3.175-2.177 3.084-3.919V6.966c-.018-.254 0-.508 0-.744.018-.69.036-1.36-.145-1.886l-.018-.037-.018-.036c-.363-1.252-1.452-2.322-2.74-2.685h-.036c-.345-.109-.762-.127-1.143-.127z" fill="#FFF"></path><path d="m49.348 20.424-4.136 15.62h4.172l.363-15.638h-.399v.018zm-2.867-4.698H55.3v20.317h3.882v4.807h-3.882v7.057h-6.114V40.85h-8.726v-5.496l6.022-19.628zM30.862 15.726h5.46v32.181H30.1V23.98a10.249 10.249 0 0 1-1.76 1.45c-.635.4-1.324.745-2.068 1.017V20.66c1.106-.635 2.05-1.36 2.83-2.195a8.954 8.954 0 0 0 1.76-2.74M15.677 16.052H9.364l-4.427 32.09h8.853l.49-5.858h2.794l.49 5.859h8.853l-4.408-32.09h-6.332zm0 7.402 1.488 13.17h-2.976l1.488-13.17z" fill="#FFF"></path></svg>
                        <span style={{fontSize: minutesSize}}>{minutes}</span>
                    </CardEpPhoto>
                    <CardEpContents>
                        <h5>Filme {index + 1}</h5>
                        <Language>
                            {/* Colocar condição se tiver ou não dublado */}
                            Dublado | legendado
                        </Language>
                    </CardEpContents>
                </CardEp>
            </Link>
        </List>
    )
};

const List = styled.li`
    display: flex;

    a{
        text-decoration: none;
        display: flex;
    }
`;

const CardEp = styled.div`
    width: 100%;
    display: flex;
    transition: var(--default-hover-duraction);

    &:hover{
        opacity: 0.7
    }
`;

const CardEpPhoto = styled.div`
    position: relative;

    img{
        width: 200px;
        height: 100%;
    }

    svg{
        width: 22px;
        height: 22px;
        position: absolute;
        top: 0;
        left: 0;
    }

    span{
        color: #fff;
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 15px;
        font-weight: 400;
        padding: 2px 4px;
        background-color: rgba(0, 0, 0, 0.5)
    }

    @media only screen and (max-width: 780px){
        img{
            width: 150px;
        }
    }
`;

const CardEpContents = styled.div`
    padding: 10px 5px 2px 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    
    h5{
        color: #Fff;
        font-size: 16px;
    }
`;

const Language = styled.div`
    color: var(--submain-color);
    user-select: none;
    font-size: 16px;

    @media only screen and (max-width: 750px){
        font-size: 13px;
    }
`;