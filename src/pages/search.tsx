import styled from "styled-components";

export const SearchPage = () => {
    return(
        <Container>
            <ContainerInput>
                <input placeholder="Procurar..." type="search" name="search" id="search" required/>
            </ContainerInput>
        </Container>
    )
};

const Container = styled.section``;

const ContainerInput = styled.div`
    width: 100%;
    height: 120px;
    background-color: #141519;
    display: flex;
    justify-content: center;
    align-items: center;

    input{
        width: 80%;
        letter-spacing: 1px;
        font-size: 35px;
        padding: 9px 0 5px 0;
        border: 3px solid #484848;
        border-style: none none solid none;
        outline: none;
        background-color: transparent;
        color: #FFF;
        transition: 0.3s;
        font-weight: 500;
    }

    input::placeholder{
        color: #A0A0A0;
        font-weight: 500;
        margin-left: 2px;
    }

    input:focus,
    input:valid{
        border: 3px solid rgb(160, 0, 210) ;
        border-style: none none solid none;
    }

    @media only screen and (max-width: 730px){
        height: 100px;

        input{
            font-size: 25px;
            border: 2px solid #484848;
            border-style: none none solid none;
        }
    }
`;