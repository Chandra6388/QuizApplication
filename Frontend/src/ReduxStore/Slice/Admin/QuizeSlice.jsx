import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { Login} from "../../../Service/Admin/Quize.service";



export const login = createAsyncThunk("login", async (data) => {

  try {
    const res = await Login(data);
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
    login : [], 
     
  },

  reducers: {},  
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.login = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      
  },
   
});

export default QuizeSlice;
