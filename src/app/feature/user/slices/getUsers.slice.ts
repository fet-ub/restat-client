/* eslint-disable */

import { createSlice } from "@reduxjs/toolkit";

import {
  ApiRequestStatus,
  StoredErrorResponseType,
} from "../../../../types/api.types";
import { getUsersThunk } from "../thunk/user.thunk";
import {
  GetUserResponseTypes,
  UserResponseTypes,
} from "../../../../types/user.type";
// import { CourseResponseTypes } from "../../../../types/course.type";

type InitialStateTypes = {
  status: ApiRequestStatus;
  message: string;
  users: GetUserResponseTypes[];
};

const initialState: InitialStateTypes = {
  status: ApiRequestStatus.IDLE,
  message: "",
  users: [],
};

const getUsersSlice = createSlice({
  name: "getUsersSlice",
  initialState: initialState,
  reducers: {
    resetGetUsersState: (state) => {
      state.status = ApiRequestStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersThunk.pending, (state, _action) => {
        state.status = ApiRequestStatus.PENDING;
      })
      .addCase(getUsersThunk.fulfilled, (state, action) => {
        state.status = ApiRequestStatus.FULFILLED;
        state.users = action.payload.users;
        // state.courses = action.payload;

        // console.log({ payload: action.payload });
      })
      .addCase(getUsersThunk.rejected, (state, action) => {
        (state.status = ApiRequestStatus.REJECTED),
          (state.message = (action.payload as StoredErrorResponseType).message);
        console.log({ payload: action.payload });
      });
  },
});

export const { resetGetUsersState } = getUsersSlice.actions;
export default getUsersSlice.reducer;
