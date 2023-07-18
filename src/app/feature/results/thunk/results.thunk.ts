import { createAsyncThunk } from "@reduxjs/toolkit";

import { getExceptionPayload } from "../../../../lib/utils/get-exception-payload";
import { ApiRequestErrorType } from "../../../../types/api.types";
import { ResultService } from "../../../../services/results.service";

const resultsService = new ResultService();

export const getResultsThunk = createAsyncThunk(
  "/getResults",
  async (_, { rejectWithValue }) => {
    try {
      const response = await resultsService.getResults();

      // console.log({ response });

      return response?.data;
    } catch (ex) {
      return rejectWithValue(getExceptionPayload(ex) as ApiRequestErrorType);
    }
  }
);
