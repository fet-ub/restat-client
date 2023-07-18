import { createAsyncThunk } from "@reduxjs/toolkit";

import { StatsService } from "../../../../services/stats.service";
import { getExceptionPayload } from "../../../../lib/utils/get-exception-payload";
import { ApiRequestErrorType } from "../../../../types/api.types";

const statsService = new StatsService();

export const getStatsThunk = createAsyncThunk(
  "/getStats",
  async (_, { rejectWithValue }) => {
    try {
      const response = await statsService.getStats();

      console.log({ response });

      return response?.data;
    } catch (ex) {
      return rejectWithValue(getExceptionPayload(ex) as ApiRequestErrorType);
    }
  }
);
