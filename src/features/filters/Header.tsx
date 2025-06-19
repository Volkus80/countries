import { useContext, type FunctionComponent } from "react";
import styled from "styled-components";
import { ThemeButton } from "../../components/ThemeButton";
import { ThemeProvider } from "../../styles/ThemeProvider";
import { darkTheme } from "../../styles/darkTheme";
import { lightTheme } from "../../styles/lightTheme";
import type { ThemeType } from "../../types/ThemeType";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { clearFilters } from "./filters-slice";


const StyledHeader = styled.header<ThemeType>`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${props => props.color};
    justify-content: space-between;
    padding: 1rem 4rem;
    background-color: ${props => props.background};
    box-shadow: ${props => '0px 1px 2px 2px ' + props.secondarybackground};
    position: fixed;
    top: 0px;
    z-index:100;
    width: 100%;

    @media (max-width: 450px) {
        padding: .5rem 1rem;
    }
`;

const Header: FunctionComponent = () => {
    const themeProvider = useContext(ThemeProvider);
    const theme: ThemeType = themeProvider.type === "dark" ? darkTheme : lightTheme;
    const dispatch = useDispatch();
    return <StyledHeader background={theme.background} color={theme.color} secondarybackground={theme.secondarybackground}>
        <Link
            to="/"
            style={{ color: theme.color, outline: "none" }}
            onClick={() => dispatch(clearFilters())}>
            <h5>Where in the world?</h5>
        </Link>
        <ThemeButton
            onClick={themeProvider.toggle}
            themeName={themeProvider.type}
            theme={theme}
        />
    </StyledHeader>
}

export { Header };