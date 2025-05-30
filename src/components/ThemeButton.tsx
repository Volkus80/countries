import styled from "styled-components";
import type { ThemeType } from "../types/ThemeType";
import type { FunctionComponent } from "react";
import { LuMoon } from "react-icons/lu";
import type { ThemeName } from "../types/ThemeName";

const StyledButton = styled.button`
    border: none;
    outline: none;
    background: none;  
    padding: .6rem 1rem;
    cursor: pointer;
    transision: ease-in .3s;
    display: flex;
    flex-direction: row;
    font-size: 1.3rem;
    font-weight: 500;
    color: ${props => props.color};
    transition: eas-in, .5s;
    &:hover {
        scale: 1.1;
    };

    &:active {
        scale: .9
    }
`

interface IconedButtonProps {
    theme: ThemeType,
    themeName: ThemeName,
    onClick: () => void
}

const ThemeButton: FunctionComponent<IconedButtonProps> = ({ theme, themeName, onClick }) => {
    const name = themeName == "dark" ? "Light" : "Dark";
    return <StyledButton onClick={onClick} color={theme.color}>
        <LuMoon color={theme.color} />
        <p>{name + " Mode"}</p>
    </StyledButton>
}

export { ThemeButton }
export type { IconedButtonProps }