import { useEffect, useState, type FunctionComponent } from "react";
import styled from "styled-components";
import type { CountryData } from "../types/CountryData";
import { CountriesItem } from "../components/CountriesItem";
import { useTheme } from "../hooks/useTheme";


const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;    
    justify-content: space-around;
    flex-wrap: wrap;
    background: ${props => props.color};
    padding: 2rem;
    gap: 1rem;
`;

const Flags: FunctionComponent = () => {
    const [data, setData] = useState<CountryData[]>([]);
    const { theme } = useTheme();

    useEffect(() => {
        fetch("../data.json")
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    const countries = data.map(country => {
        const { flag, name, capital, population, region } = country;
        return <CountriesItem
            src={flag}
            name={name}
            capital={capital}
            population={population}
            region={region} />
    });

    return <Container color={theme.background}>
        {countries}
    </Container>

}

export { Flags }