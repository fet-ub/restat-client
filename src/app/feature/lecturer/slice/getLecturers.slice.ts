/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

import {
  ApiRequestStatus,
  StoredErrorResponseType,
} from "../../../../types/api.types";
import { getLecturersThunk } from "../thunk/lecturer.thunk";
import { LecturerResponseTypes } from "../../../../types/lecturer.type";

type InitialStateTypes = {
  status: ApiRequestStatus;
  message: string;
  lecturers: LecturerResponseTypes[];
};

const initialState: InitialStateTypes = {
  status: ApiRequestStatus.IDLE,
  message: "",
  lecturers: [],
};

const getLecturersSlice = createSlice({
  name: "getLecturersSlice",
  initialState: initialState,
  reducers: {
    resetGetLecturersState: (state) => {
      state.status = ApiRequestStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLecturersThunk.pending, (state, _action) => {
        state.status = ApiRequestStatus.PENDING;
      })
      .addCase(getLecturersThunk.fulfilled, (state, action) => {
        state.status = ApiRequestStatus.FULFILLED;
        state.lecturers = action.payload;

        // console.log({ payload: action.payload });
      })
      .addCase(getLecturersThunk.rejected, (state, action) => {
        (state.status = ApiRequestStatus.REJECTED),
          (state.message = (action.payload as StoredErrorResponseType).message);
        // console.log({ payload: action.payload });
      });
  },
});

export const { resetGetLecturersState } = getLecturersSlice.actions;
export default getLecturersSlice.reducer;
