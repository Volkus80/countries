import { useParams } from "react-router";
import { Flag } from "../components/Flag";
import type { CountryFullData } from "../types";
import { useFetch } from "../hooks/useFetch";
import { Wrapper } from "../components/Wrapper";
import { PuffLoader } from "react-spinners";
import { useTheme } from "../hooks/useTheme";
import { ErrorPage } from "./ErrorPage";

const Country = () => {
    const { name } = useParams();
    const { data, loading, error } = useFetch<CountryFullData[]>(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
    const { theme } = useTheme();

    if (loading) {
        return <Wrapper>
            <PuffLoader
                cssOverride={
                    {
                        display: "block",
                        margin: "0 auto",
                        alignSelf: "center"
                    }
                }
                color={theme.color}
                aria-label="Loading..."
                loading={loading}
            />
        </Wrapper>
    } else if (error) {
        return <ErrorPage />
    } else if (data) {
        return <Flag data={data} />
    } else {
        return <></>
    }
}


export { Country };