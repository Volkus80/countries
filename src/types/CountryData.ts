interface CountryData {
    name: {
        common: string,
        official: string,
        nativeName: {
            mon: {
                official: string,
                common: string
            }
        }
    },
    capital: string[],
    region: string,
    population: number,
    currencies: {
        [key: string]: {
            code: string,
            name: string
        }
    },
    borders: string[],
    flags: {
        png: string,
        svg: string,
        alt: string
    }
}

export type { CountryData }