import type { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { useTheme } from "../hooks/useTheme";
import type { ThemeName } from "../types/ThemeName";

interface WrapperProps {
    padding?: string,
    children: ReactNode[]
}


const StyledWrapper = styled.div<{ padding?: string, type: ThemeName, bg: string }>`
    width: 100%;
    height: 100%;
    background-color: ${props => props.type === "light" ? "#FAFAFA" : props.bg};
    display: flex;
    flex-direction: column;
    // padding: ${props => props.padding};
    padding: 2rem 4rem;
    @media(max-width: 450px) {
        padding: 0;
        align-items: center;
    };
`;

const Wrapper: FunctionComponent<WrapperProps> = ({ padding = "0", children }) => {
    const { type, theme } = useTheme();
    return <StyledWrapper type={type} padding={padding} bg={theme.background}>
        {children}
    </StyledWrapper>
}

export { Wrapper };