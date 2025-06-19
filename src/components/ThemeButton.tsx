import styled from "styled-components";
import type { ThemeType } from "../types/ThemeType";
import type { FunctionComponent } from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import type { ThemeName } from "../types/ThemeName";

const StyledButton = styled.button`
    border: none;
    outline: none;
    background: none;  
    padding: .6rem 0 .6rem 4rem;
    cursor: pointer;
    transision: ease-in .3s;
    display: flex;
    flex-direction: row;
    // font-size: 1.3rem;
    font-weight: 500;
    color: ${props => props.color};
    transition: eas-in, .2s;
    line-height: 1rem;
    &:hover {
        scale: 1.1;
    };

    &:active {
        scale: .9
    }

    @media (max-width: 450px) {
        font-size: 1rem;
    }
`;

interface IconedButtonProps {
    theme: ThemeType,
    themeName: ThemeName,
    onClick: () => void
}

const ThemeButton: FunctionComponent<IconedButtonProps> = ({ theme, themeName, onClick }) => {
    const icon = themeName === "dark" ? <LuMoon color={theme.color} size="2rem" /> : <LuSun color={theme.color} size="2rem" />

    return <StyledButton onClick={onClick} color={theme.color}>
        {icon}
    </StyledButton>
}

export { ThemeButton }
export type { IconedButtonProps }