interface FetchData<T> {
    error: string | null,
    loading: boolean,
    data: T | null
}

export type { FetchData }