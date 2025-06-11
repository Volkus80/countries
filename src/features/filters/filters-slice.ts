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
        }
    }
});

const filtersReducer = filterSlice.reducer;
const { setFilterByName, setFilterByRegion } = filterSlice.actions;

export { filtersReducer, setFilterByName, setFilterByRegion, type Filters };


