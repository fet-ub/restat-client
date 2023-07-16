/* eslint-disable */

import { createSlice } from "@reduxjs/toolkit";

import {
  ApiRequestStatus,
  StoredErrorResponseType,
} from "../../../../types/api.types";
import { createCaMarkThunk } from "../thunk/caMark.thunk";

type InitialStateTypes = {
  status: ApiRequestStatus;
  message: string;
};

const initialState: InitialStateTypes = {
  status: ApiRequestStatus.IDLE,
  message: "",
};

const createCaMarkSlice = createSlice({
  name: "createStudentSlice",
  initialState: initialState,
  reducers: {
    resetCreateCaMarkState: (state) => {
      state.status = ApiRequestStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCaMarkThunk.pending, (state, _action) => {
        state.status = ApiRequestStatus.PENDING;
        //  console.log({ payload: action.payload });
      })
      .addCase(createCaMarkThunk.fulfilled, (state, action) => {
        state.status = ApiRequestStatus.FULFILLED;

        console.log({ payload: action.payload });
      })
      .addCase(createCaMarkThunk.rejected, (state, action) => {
        (state.status = ApiRequestStatus.REJECTED),
          (state.message = (action.payload as StoredErrorResponseType).message);
        console.log({ payload: action.payload });
      });
  },
});

export const { resetCreateCaMarkState } = createCaMarkSlice.actions;
export default createCaMarkSlice.reducer;
