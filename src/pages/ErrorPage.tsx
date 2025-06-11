import styled from "styled-components";
import { MdOutlineErrorOutline } from 'react-icons/md';
import type { FunctionComponent } from "react";
import { useTheme } from "../hooks/useTheme";
import type { ThemeType } from "../types/ThemeType";

const Wrapper = styled.main<{ background: string }>`
    background-color: ${props => props.background};
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

const ErrorText = styled.p`
    color: ${props => props.color};
    font-size: 2rem;
    margin-top: 2rem;
`;

const ErrorPage: FunctionComponent = () => {
    const { theme } = useTheme();
    return <Wrapper background={theme.background}>
        <MdOutlineErrorOutline color={theme.color} fontSize="10rem" />
        <ErrorText color={theme.color}> Что-то пошло не так </ErrorText>
    </Wrapper>
};

export { ErrorPage };