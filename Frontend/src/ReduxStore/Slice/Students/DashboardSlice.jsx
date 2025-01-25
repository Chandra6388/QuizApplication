import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { get_LastFive_Students_Resistered } from "../../../Service/Admin/Dashbord.service";



export const getLastFiveStudentsResistered = createAsyncThunk("lastfive-student", async (data) => {

  try {
    const res = await get_LastFive_Students_Resistered(data);
    return await res;
  } catch (err) {
    return err;
  }
});

 



const DashboardSlice = createSlice({
  name: "DashboardSlice",
  initialState: {
    isLoading: false,
    isError: false,
    allquestion: [],
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AllQuestion.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(AllQuestion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allquestion = action.payload;
      })
      .addCase(AllQuestion.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
     
  },

});

export default DashboardSlice;
