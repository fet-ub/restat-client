/* eslint-disable */

import { createSlice } from "@reduxjs/toolkit";

import {
  ApiRequestStatus,
  StoredErrorResponseType,
} from "../../../../types/api.types";
import { createBulkCaMarkThunk } from "../thunk/caMark.thunk";
type InitialStateTypes = {
  status: ApiRequestStatus;
  message: string;
};

const initialState: InitialStateTypes = {
  status: ApiRequestStatus.IDLE,
  message: "",
};

const createBulkCaMarkSlice = createSlice({
  name: "createBulkCaMarkSlice",
  initialState: initialState,
  reducers: {
    resetCreateBulkCaMarkState: (state) => {
      state.status = ApiRequestStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBulkCaMarkThunk.pending, (state, _action) => {
        state.status = ApiRequestStatus.PENDING;
        //  console.log({ payload: action.payload });
      })
      .addCase(createBulkCaMarkThunk.fulfilled, (state, action) => {
        state.status = ApiRequestStatus.FULFILLED;

        // console.log({ payload: action.payload });
      })
      .addCase(createBulkCaMarkThunk.rejected, (state, action) => {
        (state.status = ApiRequestStatus.REJECTED),
          (state.message = (action.payload as StoredErrorResponseType).message);
        console.log({ payload: action.payload });
      });
  },
});

export const { resetCreateBulkCaMarkState } = createBulkCaMarkSlice.actions;
export default createBulkCaMarkSlice.reducer;
