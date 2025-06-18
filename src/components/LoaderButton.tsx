import type { FunctionComponent } from "react";
import { useFetch } from "../hooks/useFetch";
import type { CountryNameData, LoadButtonProps } from "../types";
import { Button } from "./Button";
import { ClipLoader } from "react-spinners";
import { useTheme } from "../hooks/useTheme";


const LoaderButton: FunctionComponent<LoadButtonProps> = ({ code }) => {
    const { loading, data, error } = useFetch<{ name: CountryNameData }>(`https://restcountries.com/v3.1/alpha/${code}?fields=name`);
    const { theme } = useTheme();


    return <Button>
        <ClipLoader color={theme.color} loading={loading} size="16" />
        {error && "No data"}
        {data && data.name.common}
    </Button>

};

export { LoaderButton };