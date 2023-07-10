/* eslint-disable */

import { createSlice } from "@reduxjs/toolkit";

import {
  ApiRequestStatus,
  StoredErrorResponseType,
} from "../../../../types/api.types";
import { getCoursesThunk } from "../thunk/course.thunk";
import { CourseResponseTypes } from "../../../../types/course.type";

type InitialStateTypes = {
  status: ApiRequestStatus;
  message: string;
  courses: CourseResponseTypes[]
};

const initialState: InitialStateTypes = {
  status: ApiRequestStatus.IDLE,
  message: "",
  courses:[] 
};

const getCoursesSlice = createSlice({
  name: "getCoursesSlice",
  initialState: initialState,
  reducers: {
    resetGetCoursesState: (state) => {
      state.status = ApiRequestStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCoursesThunk.pending, (state, _action) => {
        state.status = ApiRequestStatus.PENDING;
        
      })
      .addCase(getCoursesThunk.fulfilled, (state, action) => {
        state.status = ApiRequestStatus.FULFILLED;
        state.courses=action.payload
       

        console.log({ payload: action.payload });
      })
      .addCase(getCoursesThunk.rejected, (state, action) => {
        (state.status = ApiRequestStatus.REJECTED),
          (state.message = (action.payload as StoredErrorResponseType).message);
        console.log({ payload: action.payload });
      });
  },
});

export const { resetGetCoursesState } = getCoursesSlice.actions;
export default getCoursesSlice.reducer;
