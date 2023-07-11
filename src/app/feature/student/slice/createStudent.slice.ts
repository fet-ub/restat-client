/* eslint-disable */

import { createSlice } from "@reduxjs/toolkit";

import {
  ApiRequestStatus,
  StoredErrorResponseType,
} from "../../../../types/api.types";
import { createStudentThunk } from "../thunk/student.thunk";
type InitialStateTypes = {
  status: ApiRequestStatus;
  message: string;
};

const initialState: InitialStateTypes = {
  status: ApiRequestStatus.IDLE,
  message: "",
};

const createStudentSlice = createSlice({
  name: "createStudentSlice",
  initialState: initialState,
  reducers: {
    resetCreateStudentState: (state) => {
      state.status = ApiRequestStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createStudentThunk.pending, (state, _action) => {
        state.status = ApiRequestStatus.PENDING;
        //  console.log({ payload: action.payload });
      })
      .addCase(createStudentThunk.fulfilled, (state, action) => {
        state.status = ApiRequestStatus.FULFILLED;

        console.log({ payload: action.payload });
      })
      .addCase(createStudentThunk.rejected, (state, action) => {
        (state.status = ApiRequestStatus.REJECTED),
          (state.message = (action.payload as StoredErrorResponseType).message);
        console.log({ payload: action.payload });
      });
  },
});

export const { resetCreateStudentState } = createStudentSlice.actions;
export default createStudentSlice.reducer;
