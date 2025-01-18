import styled from "styled-components"
import { CardSection } from "../components/Home/cardsection";
import { Contents } from "../components/Home/Contents";

export const HomePage = () => {
    return(
        <Container>
            <CardSection/>
            <HeaderPosition/>
            <Contents/>
        </Container>
    )
}

const Container = styled.div`

`;

const HeaderPosition = styled.div`
    height: var(--Header-height);
`;