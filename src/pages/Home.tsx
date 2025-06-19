import { type FunctionComponent } from "react";
import { SearchBlock } from "../components/SearchBlock";
import { Flags } from "../features/countries/Flags";

const Home: FunctionComponent = () => {

    return (
        <>
            <SearchBlock />
            <Flags />
        </>
    )
};

export { Home };