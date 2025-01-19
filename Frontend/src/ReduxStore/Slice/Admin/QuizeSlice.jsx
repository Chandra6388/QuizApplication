import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { All_Question} from "../../../Service/Admin/Quize.service";



export const AllQuestion = createAsyncThunk("login", async (data) => {

  try {
    const res = await All_Question(data);
    return await res;
  } catch (err) {
    return err;
  }
});
 
 
const QuizeSlice = createSlice({
  name: "QuizeSlice",
  initialState: {
    isLoading: false,
    isError: false,
    allquestion : [], 
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

export default QuizeSlice;
