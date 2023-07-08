import { createAsyncThunk } from "@reduxjs/toolkit";

import { LoginRequestType } from "../../../../types/auth.type";
import { AuthService } from "../../../../services/auth.service";
import { getExceptionPayload } from "../../../../lib/utils/get-exception-payload";
import { ApiRequestErrorType } from "../../../../types/api.types";

const authService = new AuthService();

export const loginUserThunk = createAsyncThunk(
  "/auth/login",
  async (data: LoginRequestType, { rejectWithValue }) => {
    try {
      const response = await authService.loginUser(data);
      return response?.data;
    } catch (ex) {
      return rejectWithValue(getExceptionPayload(ex) as ApiRequestErrorType);
    }
  }
);
