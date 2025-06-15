import { type FunctionComponent, useState, useEffect } from "react";
import type { CountryData } from "../types/CountryData";
import { Wrapper } from "../components/Wrapper";
import { SearchBlock } from "../components/SearchBlock";
import { Flags } from "../features/countries/Flags";

const Home: FunctionComponent = () => {

    return (
        // <Wrapper padding="1.5rem">
        <>
            <SearchBlock />
            <Flags />
        </>
        // </Wrapper>
    )
};

export { Home };