import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    home: [],
  },
  // extraReducers: (builder) => {
  //   builder.addCase();
  // },
});

export default homeSlice.reducer;
