/* eslint-disable */

import { createSlice } from "@reduxjs/toolkit";

import {
  ApiRequestStatus,
  StoredErrorResponseType,
} from "../../../../types/api.types";
import { deleteStudentThunk } from "../thunk/student.thunk";

type InitialStateTypes = {
  status: ApiRequestStatus;
  message: string;
};

const initialState: InitialStateTypes = {
  status: ApiRequestStatus.IDLE,
  message: "",
};

const deleteStudentSlice = createSlice({
  name: "deleteStudentSlice",
  initialState: initialState,
  reducers: {
    resetDeleteStudentState: (state) => {
      state.status = ApiRequestStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteStudentThunk.pending, (state, _action) => {
        state.status = ApiRequestStatus.PENDING;
        //  console.log({ payload: action.payload });
      })
      .addCase(deleteStudentThunk.fulfilled, (state, action) => {
        state.status = ApiRequestStatus.FULFILLED;
        // console.log(state.status);

        // console.log(state.status);

        console.log({ payload: action.payload });
      })
      .addCase(deleteStudentThunk.rejected, (state, action) => {
        (state.status = ApiRequestStatus.REJECTED),
          (state.message = (action.payload as StoredErrorResponseType).message);
        console.log({ payload: action.payload });
      });
  },
});

export const { resetDeleteStudentState } = deleteStudentSlice.actions;
export default deleteStudentSlice.reducer;
