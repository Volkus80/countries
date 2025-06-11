import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { CountryData } from "../../types/CountryData";
import type { CAppState } from "../../store";
import type { Filters } from "../filters/filters-slice";


const fetchCountries = createAsyncThunk(
    "@@countries/fetch-countries",
    async () => {
        // const data = await fetch("https://restcountries.com/v3.1/all");
        const data = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,currencies,region,population,borders,flags");
        // if (!data.ok) throw new Error();
        const obj = await data.json();
        return obj as CountryData[];
    }
)

interface FlagsData {
    data: CountryData[],
    loading: boolean,
    error: string | null
}

const initialState: FlagsData = {
    data: [],
    loading: false,
    error: null
}


const countriesSlice = createSlice(
    {
        name: "@@countries",
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(fetchCountries.pending, (state, action) => {
                    state.loading = true;
                })
                .addCase(fetchCountries.rejected, (state, action) => {
                    return {
                        ...state,
                        error: "Что-то пошло не так",
                        loading: false
                    }
                })
                .addCase(fetchCountries.fulfilled, (state, action) => {
                    state.error = null;
                    state.loading = false;
                    state.data = action.payload;
                })
        }
    }
)

const countriesReducer = countriesSlice.reducer
const filteredCountriesSelector = (state: CAppState, filters: Filters) => {
    if (filters.name === "" && filters.region === "All") return state.countries.data;
    const newFilters = { ...filters, region: filters.region === "All" ? "" : filters.region };

    return state.countries.data.filter(country => country.region.indexOf(newFilters.region) === 0 && country.name.common.indexOf(newFilters.name) > 0);
}
export { countriesReducer, fetchCountries, filteredCountriesSelector }


