import { type FunctionComponent, useState, useEffect } from "react";
import type { CountryData } from "../types/CountryData";
import { Wrapper } from "../components/Wrapper";
import { SearchBlock } from "../components/SearchBlock";
import { Flags } from "../components/Flags";

const Home: FunctionComponent = () => {
    const [data, setData] = useState<CountryData[]>([]);

    const getData = async () => {
        const data = await fetch("https://restcountries.com/v3.1/all");
        const obj = await data.json();
        setData(obj);
    };

    useEffect(() => {
        getData();
    }, [])


    return <Wrapper padding="1.5rem">
        <SearchBlock />
        <Flags data={data} />
    </Wrapper>
};

export { Home };