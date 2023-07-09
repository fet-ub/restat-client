/* eslint-disable */

import { createSlice } from "@reduxjs/toolkit";

import {
  ApiRequestStatus,
  StoredErrorResponseType,
} from "../../../../types/api.types";
import { createUserThunk } from "../thunk/user.thunk";

type InitialStateTypes = {
  status: ApiRequestStatus;
  message: string;
};

const initialState: InitialStateTypes = {
  status: ApiRequestStatus.IDLE,
  message: "",
};

const createUserSlice = createSlice({
  name: "createUserSlice",
  initialState: initialState,
  reducers: {
    resetcreateUserState: (state) => {
      state.status = ApiRequestStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserThunk.pending, (state, _action) => {
        state.status = ApiRequestStatus.PENDING;
        //  console.log({ payload: action.payload });
      })
      .addCase(createUserThunk.fulfilled, (state, action) => {
        state.status = ApiRequestStatus.FULFILLED;

        console.log({ payload: action.payload });
      })
      .addCase(createUserThunk.rejected, (state, action) => {
        (state.status = ApiRequestStatus.REJECTED),
          (state.message = (action.payload as StoredErrorResponseType).message);
           console.log({ payload: action.payload });
      });
  },
});

export const { resetcreateUserState } = createUserSlice.actions;
export default createUserSlice.reducer;
