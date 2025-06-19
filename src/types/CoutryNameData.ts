export type CountryNameData = {
    common: string,
    official: string,
    nativeName?: {
        [key: string]: {
            official: string,
            common: string
        }
    }
};