import { useContext, type FunctionComponent } from "react";
import styled from "styled-components";
import { ThemeButton } from "./ThemeButton";
import { ThemeProvider } from "../styles/ThemeProvider";
import { darkTheme } from "../styles/darkTheme";
import { lightTheme } from "../styles/lightTheme";
import type { ThemeType } from "../types/ThemeType";


const StyledHeader = styled.header<ThemeType>`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${props => props.color};
    justify-content: space-between;
    padding: 1rem 4rem;
    background-color: ${props => props.background};
    box-shadow: ${props => '0px 1px 2px 2px ' + props.secondarybackground};
    position: sticky;
    width: 100%;

    @media (max-width: 450px) {
        padding: .5rem 1rem;
    }
`;

const Header: FunctionComponent = () => {
    const themeProvider = useContext(ThemeProvider);
    const theme: ThemeType = themeProvider.type === "dark" ? darkTheme : lightTheme;
    return <StyledHeader background={theme.background} color={theme.color} secondarybackground={theme.secondarybackground}>
        <h5>Where in the world?</h5>
        <ThemeButton
            onClick={themeProvider.toggle}
            themeName={themeProvider.type}
            theme={theme}
        />
    </StyledHeader>
}

export { Header };