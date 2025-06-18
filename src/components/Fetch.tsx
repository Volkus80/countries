import type { FunctionComponent, ReactNode } from "react";
import { useFetch } from "../hooks/useFetch";

type FetchProps = {
    url: string
    renderItem: ReactNode
}

const FetchComponent: FunctionComponent<FetchProps> = <T,>({ url, renderItem }: FetchProps) => {
    const { data, loading, error } = useFetch<T>(url);

    return <>
    </>
}