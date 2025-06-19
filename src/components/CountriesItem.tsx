import { type FunctionComponent } from "react";
import styled from "styled-components";
import { useTheme } from "../hooks/useTheme";
import { DataItem } from "./DataItem";
import { CountryName } from "./CoutryName";

interface ShadowedComponentProp {
    shadow_color: string
}

const CountriesItemContainer = styled.div<ShadowedComponentProp>`
    width: 320px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: ${props => "0px 1px 2px 2px " + props.shadow_color};
    background-color: transparent;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column; 
    height: 100%;
`;



const ContryDataContainer = styled.div<{ background: string }>`
    padding: 1rem;
    background: ${props => props.background};
    display: flex;
    flex: 1 1;
    flex-direction: column;
    justify-content: space-between;
    min-height: 12rem;
`;

const Flag = styled.img<{ border: string }>`  
    width: 320px;
    max-height: 240px;
    flex: 2 1 auto; 
    object-fit: fill;
    border-bottom: ${props => "solid 1px " + props.border};
`;



interface CountriesItemProps {
    src: string,
    name: string,
    population: number,
    region: string,
    capital: string[],
}



const CountriesItem: FunctionComponent<CountriesItemProps> = ({ src, name, population, region, capital }) => {
    const { theme } = useTheme();
    const capitals = capital?.join(", ") || "";
    return <CountriesItemContainer shadow_color={theme.secondarybackground}>
        <Flag src={src} loading="lazy" border={theme.secondarybackground} />
        <ContryDataContainer background={theme.background}>
            <CountryName color={theme.color}>{name}</CountryName>
            <DataItem name="Population:" value={population.toLocaleString()} color={theme.color} />
            <DataItem name="Region:" value={region} color={theme.color} />
            <DataItem name="Capitals:" value={capitals} color={theme.color} />
        </ContryDataContainer>
    </CountriesItemContainer>
}

export { CountriesItem, type ShadowedComponentProp }