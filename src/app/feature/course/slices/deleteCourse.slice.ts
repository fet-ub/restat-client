/* eslint-disable */

import { createSlice } from "@reduxjs/toolkit";

import {
  ApiRequestStatus,
  StoredErrorResponseType,
} from "../../../../types/api.types";
import { deleteCourseThunk } from "../thunk/course.thunk";

type InitialStateTypes = {
  status: ApiRequestStatus;
  message: string;
};

const initialState: InitialStateTypes = {
  status: ApiRequestStatus.IDLE,
  message: "",
};

const deleteCourseSlice = createSlice({
  name: "deleteCourseSlice",
  initialState: initialState,
  reducers: {
    resetDeleteCourseState: (state) => {
      state.status = ApiRequestStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteCourseThunk.pending, (state, _action) => {
        state.status = ApiRequestStatus.PENDING;
        //  console.log({ payload: action.payload });
      })
      .addCase(deleteCourseThunk.fulfilled, (state, action) => {
        state.status = ApiRequestStatus.FULFILLED;
        // console.log(state.status);

        console.log(state.status);

        console.log({ payload: action.payload });
      })
      .addCase(deleteCourseThunk.rejected, (state, action) => {
        (state.status = ApiRequestStatus.REJECTED),
          (state.message = (action.payload as StoredErrorResponseType).message);
        console.log({ payload: action.payload });
      });
  },
});

export const { resetDeleteCourseState } = deleteCourseSlice.actions;
export default deleteCourseSlice.reducer;
