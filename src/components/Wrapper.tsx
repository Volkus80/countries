import type { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { useTheme } from "../hooks/useTheme";
import type { ThemeName } from "../types/ThemeName";

interface WrapperProps {
    padding?: string,
    children: ReactNode | ReactNode[]
}


const StyledWrapper = styled.div<{ padding?: string, type: ThemeName, bg: string }>`
    width: 100%;
    min-height: 100%;
    background-color: ${props => props.type === "light" ? "#FAFAFA" : props.bg};
    display: flex;
    flex-direction: column;
    flex: 2 1;
    padding: calc(2rem + 60px) 4rem 2rem;
    @media(max-width: 450px) {
        padding:  60px 1rem 1rem;
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