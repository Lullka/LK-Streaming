import { useEffect } from "react";
import styled from "styled-components";
import { ContentImg } from "../components/about/contentImg";
import { LoadInfosSeriado } from "../components/about/loadInfosSeriado";
import { SerieEps } from "../components/about/SeriesEps";

export const InfosAboutSeries = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'auto' });
        /* window.scrollTo({ top: 0, behavior: 'smooth' }); */
    }

    useEffect(() => {
        scrollToTop();
    }, [])

    return(
        <Container>
            <ContentImg/>{/* Criado para aplicar um background para quando a imagem de prévia for renderizada para aparelhos menores ou iguais a 800px */}
            <LoadInfosSeriado/>
            <SerieEps/>
        </Container>
    );
};

const Container = styled.section``;