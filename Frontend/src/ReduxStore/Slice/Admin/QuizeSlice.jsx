import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { All_Question, Add_Question } from "../../../Service/Admin/Quize.service";



export const AllQuestion = createAsyncThunk("getAllQuestions", async (data) => {

  try {
    const res = await All_Question(data);
    return await res;
  } catch (err) {
    return err;
  }
});

export const AddQuestion = createAsyncThunk("addQuestion", async (data) => {

  try {
    const res = await Add_Question(data);
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
    allquestion: [],
    addquestion: []
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
      .addCase(AddQuestion.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(AddQuestion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.addquestion = action.payload;
      })
      .addCase(AddQuestion.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
  },

});

export default QuizeSlice;
