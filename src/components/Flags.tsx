import { useEffect, useState, type FunctionComponent } from "react";
import styled from "styled-components";
import type { CountryData } from "../types/CountryData";
import { CountriesItem } from "../components/CountriesItem";


const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;    
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 1rem 0;
    gap: 1rem;

    @media (max-width: 450px) {
        flex-direction: column;
        padding: 0;
        align-items: center;
    }
`;

const Flags: FunctionComponent<{ data: CountryData[] }> = ({ data }) => {

    const countries = data.map((country, i) => {
        // const { flag, name, capital, population, region } = country;
        return <CountriesItem
            key={i}
            src={country.flags.png}
            name={country.name.common}
            capital={country.capital}
            population={country.population}
            region={country.region} />
    });

    return <Container>
        {countries}
    </Container>

}

export { Flags };