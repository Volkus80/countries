import type { CountryData } from "./CountryData";

interface CountryFullData extends CountryData {
    borders?: string[],
    currencies?: {
        [key: string]: {
            code: string,
            name: string
        }
    },
    subregion: string,
    languages?: string[],
    tld?: string[]
}

export type { CountryFullData };