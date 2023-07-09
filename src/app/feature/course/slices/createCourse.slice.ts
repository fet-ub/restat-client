/* eslint-disable */

import { createSlice } from "@reduxjs/toolkit";

import {
  ApiRequestStatus,
  StoredErrorResponseType,
} from "../../../../types/api.types";
import { createCourseThunk } from "../thunk/course.thunk";

type InitialStateTypes = {
  status: ApiRequestStatus;
  message: string;
};

const initialState: InitialStateTypes = {
  status: ApiRequestStatus.IDLE,
  message: "",
};

const createCourseSlice = createSlice({
  name: "createCourseSlice",
  initialState: initialState,
  reducers: {
    resetcreateCourseState: (state) => {
      state.status = ApiRequestStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCourseThunk.pending, (state, _action) => {
        state.status = ApiRequestStatus.PENDING;
        //  console.log({ payload: action.payload });
      })
      .addCase(createCourseThunk.fulfilled, (state, action) => {
        state.status = ApiRequestStatus.FULFILLED;

        console.log({ payload: action.payload });
      })
      .addCase(createCourseThunk.rejected, (state, action) => {
        (state.status = ApiRequestStatus.REJECTED),
          (state.message = (action.payload as StoredErrorResponseType).message);
        console.log({ payload: action.payload });
      });
  },
});

export const { resetcreateCourseState } = createCourseSlice.actions;
export default createCourseSlice.reducer;
