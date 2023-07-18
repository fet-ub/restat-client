/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

import {
  ApiRequestStatus,
  StoredErrorResponseType,
} from "../../../../types/api.types";
import { getStatsThunk } from "../thunk/stats.thunk";
import { StatsResponseType } from "../../../../types/stats.type";
// import { LecturerResponseTypes } from "../../../../types/lecturer.type";

type InitialStateTypes = {
  status: ApiRequestStatus;
  message: string;
  stats: StatsResponseType;
};

const initialState: InitialStateTypes = {
  status: ApiRequestStatus.IDLE,
  message: "",
  stats: {} as StatsResponseType,
  //   stats: [],
};

const getStatsSlice = createSlice({
  name: "getStatsSlice",
  initialState: initialState,
  reducers: {
    resetGetStatsState: (state) => {
      state.status = ApiRequestStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStatsThunk.pending, (state, _action) => {
        state.status = ApiRequestStatus.PENDING;
      })
      .addCase(getStatsThunk.fulfilled, (state, action) => {
        state.status = ApiRequestStatus.FULFILLED;
        state.stats = action.payload;

        // console.log({ payload: action.payload });
      })
      .addCase(getStatsThunk.rejected, (state, action) => {
        (state.status = ApiRequestStatus.REJECTED),
          (state.message = (action.payload as StoredErrorResponseType).message);
        console.log({ payload: action.payload });
      });
  },
});

export const { resetGetStatsState } = getStatsSlice.actions;
export default getStatsSlice.reducer;
