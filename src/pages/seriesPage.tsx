import styled from "styled-components";
import { InfoExtra } from "../components/extra/infoextra";

export const SeriesPage = () => {
    return(
        <Container>
            <InfoExtra width="270px" height="50px" SVGSize="30px" fontSize="16px"/>
        </Container>
    )
};

const Container = styled.section`
    color: #Fff;
    font-size: 30px;
`;