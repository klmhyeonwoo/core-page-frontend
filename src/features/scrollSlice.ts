import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";

export const scrollSlice = createSlice({
    name: "scroll",
    initialState: {
        openingScroll: 0,
    },
    reducers: {
        setOpeningScroll: (state, action) => {
            state.openingScroll = action.payload.openingScroll;
        }
    }
})

export const { setOpeningScroll } = scrollSlice.actions;
export default scrollSlice.reducer;