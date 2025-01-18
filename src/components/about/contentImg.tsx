import styled from "styled-components";

export const ContentImg = () => {
    return(
        <Container>
                <div> {/* backImg */}
                    <img src="https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABapFTnXqUmqu4TUKmRoLY3srwHCqKTqQ8hM4fOSDPkLTpnYeN0aKCce265qJ1g0AyezKLizgL59-6Z6Om8JgEFyiSl_qV6a-XdzR.jpg?r=857" alt="serieImg" />
                </div>
                <div> {/* FrontImg */}
                    <img src="https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABapFTnXqUmqu4TUKmRoLY3srwHCqKTqQ8hM4fOSDPkLTpnYeN0aKCce265qJ1g0AyezKLizgL59-6Z6Om8JgEFyiSl_qV6a-XdzR.jpg?r=857" alt="serieImg" />
                </div>
                <div> {/* Filme/Serie title */}
                    <img src="https://occ-0-404-1740.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUckOeRLLQGMwr0Jk0kSeOLnl6m5eerSm-ibbRR2YRJ46iLe5sjZAEq1-1p82MEKAkaq2Xr-RV1lAlBSZyQizPfWHRcXWbr24j22X62NbHe62kXVf4AC1dFzS4gitSSkpFlWJ65IvLhKTwBSpQnP47NoCcmb7ec7jvpWmavj3SddPgimiFc7.webp?r=32e" alt="serie title" />
                </div>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 55vh;

    div{
        pointer-events: none;
        user-select: none;
    }

    div:nth-child(1){
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    div:nth-child(1) img{
        width: 110%;
        object-fit: cover;
        filter: blur(10px);
    }

    div:nth-child(2){
        position: absolute;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
    }

    div:nth-child(2) img{
        height: 100%;
    }

    div:nth-child(3){
        position: absolute;
        bottom: 5vw;
        left: 5vw;
    }

    div:nth-child(3) img{
        width: 25vw;
    }
`;