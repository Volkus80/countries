import { useEffect, type CSSProperties, type FunctionComponent } from "react";
import styled from "styled-components";
import { CountriesItem } from "../components/CountriesItem";
import { useDispatch, useSelector } from "react-redux";
import type { CAppDispatch, CAppState } from "../store";
import { fetchCountries, filteredCountriesSelector } from "../features/countries/countries-slice";
import { PuffLoader } from "react-spinners";
import { useTheme } from "../hooks/useTheme";
import { Link } from "react-router";

const Container = styled.div<{ fl: string }>`
    width: 100%;
    display: flex;
    flex-direction: row;    
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 1rem 0;
    gap: 1rem;
    flex: ${props => props.fl};

    @media (max-width: 450px) {
        flex-direction: column;
        padding: 0;
        align-items: center;
    }
`;

const loaderCss: CSSProperties = {
    display: "block",
    margin: "0 auto",
    alignSelf: "center"
}

const Flags: FunctionComponent = () => {
    const dispatch: CAppDispatch = useDispatch();
    const { loading } = useSelector((state: CAppState) => state.countries)
    const filters = useSelector((state: CAppState) => state.filters);
    const countriesData = useSelector((state: CAppState) => filteredCountriesSelector(state, filters))
    const { theme } = useTheme();

    useEffect(() => {
        dispatch(fetchCountries());
    }, [dispatch])

    const countries = countriesData.map((country, i) => {

        return <Link to={`/flags/${country.name.common}`}>
            <CountriesItem
                key={i}
                src={country.flags.png}
                name={country.name.common}
                capital={country.capital}
                population={country.population}
                region={country.region} />
        </Link>
    });

    return <Container fl={loading ? "2 1" : "unset"}>
        <PuffLoader
            cssOverride={loaderCss}
            color={theme.color}
            aria-label="Loading..."
            loading={loading}
        />
        {countries}
    </Container>

}

export { Flags };