import { useEffect, useState } from "react"
import type { FetchData } from "../types/FetchData";

const useFetch = <T>(url: string): FetchData<T> => {
    const [error, setError] = useState<null | string>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(url);
            if (!response.ok) {
                setLoading(false);
                setError("Что-то пошло не так");
                return;
            }

            const json = await response.json();
            setLoading(false);
            setData(json as T);
        };

        getData();

    }, [url]);

    return { error, loading, data };
};

export { useFetch };