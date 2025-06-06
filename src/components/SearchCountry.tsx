import styled from "styled-components";
import type { ThemeType } from "../types/ThemeType";
import { LuSearch } from "react-icons/lu";
import type { FunctionComponent } from "react";
import { useTheme } from "../hooks/useTheme";

const Container = styled.div<ThemeType>`
    max-width: 350px;

    background: ${props => props.background};
    border-radius: .5rem;
    padding: .8rem 1rem;
    color: ${props => props.color};
    box-shadow: ${props => "0px 1px 2px 2px " + props.secondarybackground};
    display: flex;
    flex-direction: row;
`;

const Input = styled.input.attrs({ type: "search", placeholder: "Search for a counttry..." })`
    font-size: 1rem;
    border: none;
    outline: none;
    flex: 2 1 auto;
    background: transparent;
    margin: 0 1rem;
    color: ${props => props.color};
`;

const SearchCountry: FunctionComponent = () => {
    const { theme } = useTheme();

    return (
        <Container
            background={theme.background}
            color={theme.color}
            secondarybackground={theme.secondarybackground}
        >
            <LuSearch color={theme.color} />
            <Input color={theme.color} />

        </Container>
    );
};

export { SearchCountry };