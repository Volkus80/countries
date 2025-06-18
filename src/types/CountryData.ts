import type { CountryNameData } from "./CoutryNameData"

interface CountryData {
    name: CountryNameData,
    capital?: string[],
    region: string,
    population: number,
    flags: {
        png: string,
        svg: string,
        alt: string
    }
}

export type { CountryData }