import type { FunctionComponent } from "react";
import { useNavigate, useNavigation, useParams } from "react-router";
import { useTheme } from "../hooks/useTheme";
import styled from "styled-components";
import { Button } from "../components/Button";
import { FaArrowLeft } from "react-icons/fa";

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;   
    gap: 2rem; 
    background-color: transparent;
    align-items: flex-start;
`;



const Flag: FunctionComponent = () => {
    const { name } = useParams()
    const { theme } = useTheme();
    const navigate = useNavigate();
    return <Wrapper>
        <Button onClick={() => navigate(-1)}>
            <FaArrowLeft color={theme.color} />
            Back
        </Button>
    </Wrapper>
}

export { Flag };