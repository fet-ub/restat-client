/* eslint-disable */

import { createSlice } from "@reduxjs/toolkit";

import { IUser } from "../../../../types/user.type";
import { loginUserThunk } from "../thunks/login.thunk";
import {
  ApiRequestStatus,
  StoredErrorResponseType,
} from "../../../../types/api.types";

type InitialStateTypes = {
  user: IUser;
  accessToken: string;
  role: string;
  status: ApiRequestStatus;
  message: string;
};

const initialState: InitialStateTypes = {
  user: {} as IUser,
  status: ApiRequestStatus.IDLE,
  accessToken: "",
  role: "",
  message: "",
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: initialState,
  reducers: {
    resetLoginState: (state) => {
      state.status = ApiRequestStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.pending, (state, _action) => {
        (state.status = ApiRequestStatus.PENDING),
          (state.accessToken = ""),
          (state.role = ""),
          (state.user = {} as IUser);
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        (state.status = ApiRequestStatus.FULFILLED),
          (state.accessToken = action.payload.accessToken),
          (state.role = action.payload.role),
          (state.user = action.payload.user);
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        (state.status = ApiRequestStatus.REJECTED),
          (state.accessToken = ""),
          (state.role = ""),
          (state.user = {} as IUser),
          (state.message = (action.payload as StoredErrorResponseType).message);
      });
  },
});

export const { resetLoginState } = loginSlice.actions;
export default loginSlice.reducer;
