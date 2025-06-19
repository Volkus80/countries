import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { SelectTextValue } from "../../components/RegionSelect";


interface Filters {
    name: string,
    region: SelectTextValue
}



const initialState: Filters = {
    name: "",
    region: "All"
}

const filterSlice = createSlice({
    name: "@@filters",
    initialState,
    reducers: {
        setFilterByName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        setFilterByRegion: (state, action: PayloadAction<SelectTextValue>) => {
            state.region = action.payload
        },
        clearFilters: () => {
            return initialState;
        }
    }
});

const filtersReducer = filterSlice.reducer;
const { setFilterByName, setFilterByRegion, clearFilters } = filterSlice.actions;

export { filtersReducer, setFilterByName, setFilterByRegion, clearFilters, type Filters };


