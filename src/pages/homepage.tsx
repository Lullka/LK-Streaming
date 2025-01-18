import styled from "styled-components"
import { CardSection } from "../components/Home/cardsection";
import { Contents } from "../components/Home/Contents";

export const HomePage = () => {
    return(
        <Container>
            <CardSection/>
            <Contents/>
        </Container>
    )
}

const Container = styled.div`

`;