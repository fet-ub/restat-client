/* eslint-disable */

import { createSlice } from "@reduxjs/toolkit";

import {
  ApiRequestStatus,
  StoredErrorResponseType,
} from "../../../../types/api.types";
import { getStudentsThunk } from "../thunk/student.thunk";
// import { CourseResponseTypes } from "../../../../types/course.type";

type InitialStateTypes = {
  status: ApiRequestStatus;
  message: string;
  //   courses: CourseResponseTypes[];
};

const initialState: InitialStateTypes = {
  status: ApiRequestStatus.IDLE,
  message: "",
  //   courses: [],
};

const getStudentsSlice = createSlice({
  name: "getStudentsSlice",
  initialState: initialState,
  reducers: {
    resetGetStudentsState: (state) => {
      state.status = ApiRequestStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStudentsThunk.pending, (state, _action) => {
        state.status = ApiRequestStatus.PENDING;
      })
      .addCase(getStudentsThunk.fulfilled, (state, action) => {
        state.status = ApiRequestStatus.FULFILLED;
        // state.courses = action.payload;

        // console.log({ payload: action.payload });
      })
      .addCase(getStudentsThunk.rejected, (state, action) => {
        (state.status = ApiRequestStatus.REJECTED),
          (state.message = (action.payload as StoredErrorResponseType).message);
        console.log({ payload: action.payload });
      });
  },
});

export const { resetGetStudentsState } = getStudentsSlice.actions;
export default getStudentsSlice.reducer;
