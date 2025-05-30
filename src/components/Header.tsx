import type { FunctionComponent } from "react";
import styled from "styled-components";
import { ThemeButton } from "./ThemeButton";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${props => props.color};
    justify-content: space-between;
    padding: 1rem 2rem;
    background-color: #FFFFFF;
    box-shadow: 0px 1px 2px 2px #F5F5F5;
    position: sticky;
    width: 100%;
`;

const Header: FunctionComponent = () => {
    const theme = { color: "#213547", background: "transparent", secondaryBackground: "white" };
    return <StyledHeader>
        <h5>Where in the world?</h5>
        <ThemeButton
            onClick={() => { }}
            themeName="light"
            theme={theme}
        />
    </StyledHeader>
}

export { Header };