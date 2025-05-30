import type { FunctionComponent } from "react";
import styled from "styled-components";

const CountriesItemContainer = styled.div`
    width: 300px;
    border-radius: 10px;
    box-shadow: 0px 1px 2px 2px #F5F5F5;
`;

interface CountriesItemProps {
    src: string,
    name: string,
    population: number,
    region: string,
    capital: string

}

const CountriesItem: FunctionComponent<CountriesItemProps> = ({ src, name, population, region, capital }) => {
    return <CountriesItemContainer>
        <img src={src} />
    </CountriesItemContainer>
}