import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { CountryData } from "../../types/CountryData";
import type { CAppState } from "../../store";
import type { Filters } from "../filters/filters-slice";


const fetchCountries = createAsyncThunk(
    "@@countries/fetch-countries",
    async () => {
        const data = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags");
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
                .addCase(fetchCountries.pending, (state) => {
                    state.loading = true;
                })
                .addCase(fetchCountries.rejected, (state) => {
                    return {
                        ...state,
                        error: "Something wrong...",
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
    return state.countries.data.filter(country => {
        const fitRegion = country.region.includes(newFilters.region);
        const fitName = country.name.common.toLowerCase().includes(newFilters.name.toLowerCase().trim());
        return fitRegion && fitName;
    });

};

export { countriesReducer, fetchCountries, filteredCountriesSelector }


