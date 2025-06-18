import styled from "styled-components"
import type { ThemeType, ButtonProps } from "../types";
import { type FunctionComponent } from "react";
import { useTheme } from "../hooks/useTheme";




const ShadowedButton = styled.button<ThemeType>`
    border: none;
    padding: .6rem 2rem;
    border-radius: 10px;
    box-shadow: ${props => "0px 0px 3px 2px " + props.secondarybackground};
    background: ${props => props.background};
    color: ${props => props.color};
    outline: none;
    cursor: pointer;
    transition: ease-in, .3s;
    align-self: flex-start;
    &:hover {
        transform: scale(1.1);
    };

    &:active {
        transform: scale(.95);
    }
`;

const Button: FunctionComponent<ButtonProps> = ({ children, onClick = () => { } }) => {
    const { theme } = useTheme();
    return <ShadowedButton {...theme} onClick={onClick}>
        {children}
    </ShadowedButton>

};

export { Button, type ButtonProps }