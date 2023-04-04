import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";

export const scrollSlice = createSlice({
    name: "scroll",
    initialState: {
        openingScroll: 40,
    },
    reducers: {
        setOpeningScroll: (state, action) => {
            state.openingScroll = action.payload.scroll;
        }
    }
})

export const { setOpeningScroll } = scrollSlice.actions;
export default scrollSlice.reducer;