import { createAsyncThunk } from "@reduxjs/toolkit";

import { UserService } from "../../../../services/user.service";
import { getExceptionPayload } from "../../../../lib/utils/get-exception-payload";
import { ApiRequestErrorType } from "../../../../types/api.types";
import { userRequestType } from "../../../../types/auth.type";
import { UserType } from "../../../../types/user.type";

const userService = new UserService();

export const createUserThunk = createAsyncThunk(
  "/createNewUser",
  async (
    data: { body: userRequestType; userType: UserType },
    { rejectWithValue }
  ) => {
    try {
      const response = await userService.createNewUser(
        data.body,
        data.userType
      );

      console.log({ response });

      return response?.data;
    } catch (ex) {
      return rejectWithValue(getExceptionPayload(ex) as ApiRequestErrorType);
    }
  }
);

export const getUsersThunk = createAsyncThunk(
  "/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await userService.getUsers();

      // console.log("sad", { response });

      return response?.data;
    } catch (ex) {
      return rejectWithValue(getExceptionPayload(ex) as ApiRequestErrorType);
    }
  }
);

export const deleteUserThunk = createAsyncThunk(
  "/deleteUsers",
  async (data: { id: number; userType: UserType }, { rejectWithValue }) => {
    try {
      const response = await userService.deleteUser(data.id, data.userType);

      // console.log({ response });

      return response?.data;
    } catch (ex) {
      return rejectWithValue(getExceptionPayload(ex) as ApiRequestErrorType);
    }
  }
);
