/* eslint-disable */

import { createSlice } from "@reduxjs/toolkit";

import {
  ApiRequestStatus,
  StoredErrorResponseType,
} from "../../../../types/api.types";
import { createBulkStudentThunk } from "../thunk/student.thunk";
type InitialStateTypes = {
  status: ApiRequestStatus;
  message: string;
};

const initialState: InitialStateTypes = {
  status: ApiRequestStatus.IDLE,
  message: "",
};

const createBulkStudentsSlice = createSlice({
  name: "createBulkStudentsSlice",
  initialState: initialState,
  reducers: {
    resetBulkStudentState: (state) => {
      state.status = ApiRequestStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBulkStudentThunk.pending, (state, _action) => {
        state.status = ApiRequestStatus.PENDING;
        //  console.log({ payload: action.payload });
      })
      .addCase(createBulkStudentThunk.fulfilled, (state, action) => {
        state.status = ApiRequestStatus.FULFILLED;

        // console.log({ payload: action.payload });
      })
      .addCase(createBulkStudentThunk.rejected, (state, action) => {
        (state.status = ApiRequestStatus.REJECTED),
          (state.message = (action.payload as StoredErrorResponseType).message);
        console.log({ payload: action.payload });
      });
  },
});

export const { resetBulkStudentState } = createBulkStudentsSlice.actions;
export default createBulkStudentsSlice.reducer;
