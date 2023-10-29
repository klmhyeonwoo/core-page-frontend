import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";

export const mobileSlice = createSlice({
  name: "mobile",
  initialState: {
    openCategory: false,
  },
  reducers: {
    setOpenCategory: (state, action) => {
      state.openCategory = action.payload.openCategory;
    },
  },
});

export const { setOpenCategory } = mobileSlice.actions;
export default mobileSlice.reducer;
