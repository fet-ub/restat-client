/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

import {
  ApiRequestStatus,
  StoredErrorResponseType,
} from "../../../../types/api.types";
import { getResultsThunk } from "../thunk/results.thunk";
import { ResultResponseTypes } from "../../../../types/results.type";
type InitialStateTypes = {
  status: ApiRequestStatus;
  message: string;
  //   lecturers: LecturerResponseTypes[];
};

const initialState: InitialStateTypes = {
  status: ApiRequestStatus.IDLE,
  message: "",
  //   lecturers: [],
};

const getResultsSlice = createSlice({
  name: "getResultsSlice",
  initialState: initialState,
  reducers: {
    resetGetLecturersState: (state) => {
      state.status = ApiRequestStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getResultsThunk.pending, (state, _action) => {
        state.status = ApiRequestStatus.PENDING;
      })
      .addCase(getResultsThunk.fulfilled, (state, action) => {
        state.status = ApiRequestStatus.FULFILLED;
        // state.lecturers = action.payload;

        console.log("results", { payload: action.payload });
      })
      .addCase(getResultsThunk.rejected, (state, action) => {
        (state.status = ApiRequestStatus.REJECTED),
          (state.message = (action.payload as StoredErrorResponseType).message);
        // console.log({ payload: action.payload });
      });
  },
});

export const { resetGetLecturersState } = getResultsSlice.actions;
export default getResultsSlice.reducer;
