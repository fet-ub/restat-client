/* eslint-disable */

import { createSlice } from "@reduxjs/toolkit";

import {
  ApiRequestStatus,
  StoredErrorResponseType,
} from "../../../../types/api.types";
import { createExamMarkThunk } from "../thunk/examMark.thunk";

type InitialStateTypes = {
  status: ApiRequestStatus;
  message: string;
};

const initialState: InitialStateTypes = {
  status: ApiRequestStatus.IDLE,
  message: "",
};

const createExamMarkSlice = createSlice({
  name: "createExamSlice",
  initialState: initialState,
  reducers: {
    resetCreateExamMarkState: (state) => {
      state.status = ApiRequestStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createExamMarkThunk.pending, (state, _action) => {
        state.status = ApiRequestStatus.PENDING;
        //  console.log({ payload: action.payload });
      })
      .addCase(createExamMarkThunk.fulfilled, (state, action) => {
        state.status = ApiRequestStatus.FULFILLED;

        console.log({ payload: action.payload });
      })
      .addCase(createExamMarkThunk.rejected, (state, action) => {
        (state.status = ApiRequestStatus.REJECTED),
          (state.message = (action.payload as StoredErrorResponseType).message);
        console.log({ payload: action.payload });
      });
  },
});

export const { resetCreateExamMarkState } = createExamMarkSlice.actions;
export default createExamMarkSlice.reducer;
