/* eslint-disable */

import { createSlice } from "@reduxjs/toolkit";

import { IUser } from "../../../../types/user.type";
import { loginUserThunk } from "../thunks/login.thunk";
import {
  ApiRequestStatus,
  StoredErrorResponseType,
} from "../../../../types/api.types";
import { LocalStorage } from "../../../../storage/LocalStorage";
import { CONSTANTS } from "../../../../constants/constants";

type InitialStateTypes = {
  user: IUser;
  accessToken: string | null;
  role: string | null;
  status: ApiRequestStatus;
  message: string;
};

const initialState: InitialStateTypes = {
  user: JSON.parse(
    localStorage.getItem(CONSTANTS.STORAGE_KEY.CURRENT_USER) as string
  ) as IUser,
  status: ApiRequestStatus.IDLE,
  accessToken: localStorage.getItem(CONSTANTS.STORAGE_KEY.ACCESS_TOKEN),
  role: localStorage.getItem(CONSTANTS.STORAGE_KEY.USER_ROLE),
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

        LocalStorage.storeLoginData(action.payload);
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
