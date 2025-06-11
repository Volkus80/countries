import styled from "styled-components"
import { type ThemeType } from "../types/ThemeType"
import { type FunctionComponent, type ReactNode } from "react"
import { useTheme } from "../hooks/useTheme"

interface ButtonProps {
    onClick: () => void,
    children: ReactNode | ReactNode[]
}


const ShadowedButton = styled.button<ThemeType>`
    border: none;
    padding: .6rem 1rem;
    border-radius: 10px;
    box-shadow: ${props => "0px 1px 2px 2px " + props.secondarybackground};
    background: ${props => props.background};
    color: ${props => props.color};
    outline: none;
    cursor: pointer;
    transition: ease-in, .3s;
    &:hover {
        transform: scale(1.1);
    };

    &:active {
        transform: scale(.95);
    }
`;

const Button: FunctionComponent<ButtonProps> = ({ children, onClick }) => {
    const { theme } = useTheme();
    return <ShadowedButton {...theme} onClick={onClick}>
        {children}
    </ShadowedButton>

};

export { Button }