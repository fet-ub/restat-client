/* eslint-disable */

import { createSlice } from "@reduxjs/toolkit";

import {
  ApiRequestStatus,
  StoredErrorResponseType,
} from "../../../../types/api.types";
import { getStudentsThunk } from "../thunk/student.thunk";
import { StudentResponseTypes } from "../../../../types/student.type";
// import { CourseResponseTypes } from "../../../../types/course.type";

type InitialStateTypes = {
  status: ApiRequestStatus;
  message: string;
  students: StudentResponseTypes[];
};

const initialState: InitialStateTypes = {
  status: ApiRequestStatus.IDLE,
  message: "",
  students: [],
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
        state.students = action.payload.students;

        // console.log(state.students);
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
