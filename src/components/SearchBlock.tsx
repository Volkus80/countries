import type { FunctionComponent } from "react";
import styled from "styled-components";
import { SearchCountry } from "./SearchCountry";
import { RegionSelect } from "./RegionSelect";

const StyledSearchBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    background: transparent;
    gap: 1rem;
    flex-wrap: wrap;

    @media (max-width: 560px) {
        // flex-direction: column;
        align-items: flex-start;
        align-self: flex-start;
    }


`;

const SearchBlock: FunctionComponent = () => {

    return <StyledSearchBlock>
        <SearchCountry />
        <RegionSelect />
    </StyledSearchBlock >
}

export { SearchBlock };
