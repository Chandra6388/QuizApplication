import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { Login , resister_NewStudent} from "../../../Service/Auth/Auth.service";



export const login = createAsyncThunk("login", async (data) => {

  try {
    const res = await Login(data);
    return await res;
  } catch (err) {
    return err;
  }
});

export const resisterNewStudent = createAsyncThunk("resister", async (data) => {

  try {
    const res = await resister_NewStudent(data);
    return await res;
  } catch (err) {
    return err;
  }
});
 
 
const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState: {
    isLoading: false,
    isError: false,
    login : [], 
    resister : [],
     
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
      .addCase(resisterNewStudent.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(resisterNewStudent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.resister = action.payload;
      })
      .addCase(resisterNewStudent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
      
  },
   
});

export default AuthSlice;
