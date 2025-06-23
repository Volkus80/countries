import type { FunctionComponent } from "react";
import { useNavigate } from "react-router";
import { useTheme } from "../hooks/useTheme";
import styled from "styled-components";
import { Button } from "../components/Button";
import { FaArrowLeft } from "react-icons/fa";
import type { CountryFullData } from "../types/CountryFullData";
import { CountryName } from "../components/CoutryName";
import { DataItem } from "../components/DataItem";
import { LoaderButton } from "../components/LoaderButton";

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;   
    padding: 2rem 0; 
    background-color: transparent;
    align-items: flex-start;
    flex: 1 1;    
`;

const Main = styled.div`
    display: flex;
    width: 100%;
    margin-top: 2rem;
    height: 100%;
    flex: 1 1;
    align-items: center;
    // justify-content: stretch;
    gap: 2rem;
    flex-wrap: wrap;
    
`;

const DescriptionBlock = styled.div<{ basis?: string }>`
    display: flex;
    flex-direction: column;
    flex: 1 1 ${props => props?.basis || '450px'};
    margin-bottom: 2rem;
    @media(max-width: 450px) {
        margin-bottom: .8rem;
    }
    
`;

const HorizontalBlock = styled(DescriptionBlock)`
    flex-direction: row;
    height: 100%;
    flex-wrap: wrap;
    flex-basis: auto;
    gap: 1.5rem`;


const Img = styled.img.attrs({ loading: "lazy" })`
    flex: 1 1 320px;
    object-fit: contain;
    max-height: 50vh;
`;



const Flag: FunctionComponent<{ data: CountryFullData[] }> = ({ data }) => {
    const { theme } = useTheme();
    const navigate = useNavigate();
    const [countryData] = data;

    return <Wrapper>
        <Button onClick={() => navigate(-1)}>
            <FaArrowLeft color={theme.color} />
            <span style={{ marginLeft: "1rem" }}>Back</span>
        </Button>
        <Main>
            <Img src={countryData.flags.png} />
            <DescriptionBlock>
                <CountryName color={theme.color}>{countryData.name.common}</CountryName>
                <HorizontalBlock>
                    <DescriptionBlock basis="auto">
                        <DataItem name="Native name:" value={Object.values(countryData.name?.nativeName || {}).map(elem => elem.common).join(", ")} color={theme.color} />
                        <DataItem name="Population:" value={countryData.population.toLocaleString()} color={theme.color} />
                        <DataItem name="Region:" value={countryData.region} color={theme.color} />
                        <DataItem name="Sub region:" value={countryData.subregion} color={theme.color} />
                        <DataItem name="Capital:" value={(countryData?.capital || []).join(", ") || ""} color={theme.color} />
                    </DescriptionBlock>
                    <DescriptionBlock basis="auto">
                        <DataItem name="Top Level Domain:" value={(countryData?.tld || []).join(", ")} color={theme.color} />
                        <DataItem name="Currencies:" value={Object.values(countryData?.currencies || {}).map(c => c.name).join(", ")} color={theme.color} />
                        <DataItem name="Languages:" value={Object.values(countryData?.languages || {}).join(", ")} color={theme.color} />
                    </DescriptionBlock>
                </HorizontalBlock>
                <HorizontalBlock>
                    <DataItem name="Border Countries" value="" color={theme.color} />
                    <HorizontalBlock>
                        {countryData?.borders?.map(b => <LoaderButton code={b} key={b} />)}
                    </HorizontalBlock>
                </HorizontalBlock>


            </DescriptionBlock>
        </Main>

    </Wrapper>
}

export { Flag };