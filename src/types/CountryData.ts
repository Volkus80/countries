interface CountryData {
    name: string,
    capital: string,
    region: string,
    population: number,
    currencies: {
        code: string,
        name: string
    }[],
    borders: string[],
    flag: string
}

export type { CountryData }