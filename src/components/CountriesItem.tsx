import { type FunctionComponent } from "react";
import styled from "styled-components";
import { useTheme } from "../hooks/useTheme";
import { DataItem } from "./DataItem";

const CountriesItemContainer = styled.div<{ shadow_color: string }>`
    
    border-radius: 10px;
    box-shadow: ${props => "0px 1px 2px 2px " + props.shadow_color};
    background-color: "transparent";
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column; 

`;

const CountryName = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${props => props.color}
`;

const ContryDataContainer = styled.div<{ background: string }>`
    padding: 1rem;
    background: ${props => props.background};
    border-radius: 0 0 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const Flag = styled.img`
    border-radius: 10px 10px 0 0;
    max-width: 320px;  
    flex: 2 1 auto; 
    object-fit: cover;
`;



interface CountriesItemProps {
    src: string,
    name: string,
    population: number,
    region: string,
    capital: string
}



const CountriesItem: FunctionComponent<CountriesItemProps> = ({ src, name, population, region, capital }) => {
    const { theme } = useTheme();
    return <CountriesItemContainer shadow_color={theme.secondarybackground}>
        <Flag src={src} loading="lazy" />
        <ContryDataContainer background={theme.background}>
            <CountryName color={theme.color}>{name}</CountryName>
            <DataItem name="Population:" value={population} color={theme.color} />
            <DataItem name="Region:" value={region} color={theme.color} />
            <DataItem name="Capital:" value={capital} color={theme.color} />
        </ContryDataContainer>
    </CountriesItemContainer>
}

export { CountriesItem }