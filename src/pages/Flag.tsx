import type { FunctionComponent } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { useTheme } from "../hooks/useTheme";
import styled from "styled-components";
import { Button } from "../components/Button";
import { FaArrowLeft } from "react-icons/fa";
import { Wrapper } from "../components/Wrapper";
import type { CountryFullData } from "../types/CountryFullData";

// const Wrapper = styled.main`
//     display: flex;
//     flex-direction: column;   
//     gap: 2rem; 
//     background-color: transparent;
//     align-items: flex-start;
// `;



const Flag: FunctionComponent = () => {
    const countryData: CountryFullData = useLoaderData();
    const { theme } = useTheme();
    const navigate = useNavigate();

    return <Wrapper>
        <Button onClick={() => navigate(-1)}>
            <FaArrowLeft color={theme.color} />
            <span style={{ marginLeft: "1rem" }}>Back</span>
        </Button>
    </Wrapper>
}

export { Flag };