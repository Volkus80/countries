import { configureStore } from "@reduxjs/toolkit";
import { countriesReducer } from "./features/countries/countries-slice";
import { filtersReducer } from "./features/filters/filters-slice";


export const store = configureStore({
    reducer: {
        countries: countriesReducer,
        filters: filtersReducer
    },
    devTools: true
})

export type CAppState = ReturnType<typeof store.getState>
export type CAppDispatch = typeof store.dispatch