import { createAsyncThunk } from "@reduxjs/toolkit";

import { CaMarkService } from "../../../../services/caMark.service";
import { getExceptionPayload } from "../../../../lib/utils/get-exception-payload";
import { ApiRequestErrorType } from "../../../../types/api.types";
import {
  CaMarkRequestType,
  BulkCaCaMarkRequestType,
} from "../../../../types/caMark.type";

const caMarkService = new CaMarkService();

export const createCaMarkThunk = createAsyncThunk(
  "/createCaMark",
  async (data: CaMarkRequestType[], { rejectWithValue }) => {
    try {
      const response = await caMarkService.createCaMark(data);

      console.log({ response });

      // return response?.data;
    } catch (ex) {
      return rejectWithValue(getExceptionPayload(ex) as ApiRequestErrorType);
    }
  }
);

export const createBulkCaMarkThunk = createAsyncThunk(
  "/createBulkCaMark",
  async (data: BulkCaCaMarkRequestType[], { rejectWithValue }) => {
    try {
      const response = await caMarkService.createBulkCaMark(data);

      console.log({ response });

      // return response?.data;
    } catch (ex) {
      return rejectWithValue(getExceptionPayload(ex) as ApiRequestErrorType);
    }
  }
);
