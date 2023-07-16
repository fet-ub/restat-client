import { createAsyncThunk } from "@reduxjs/toolkit";

import { LecturerService } from "../../../../services/lecturer.service";
import { getExceptionPayload } from "../../../../lib/utils/get-exception-payload";
import { ApiRequestErrorType } from "../../../../types/api.types";

const lecturerService = new LecturerService();

export const getLecturersThunk = createAsyncThunk(
  "/getLecturers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await lecturerService.getLecturers();

      console.log({ response });

      return response?.data;
    } catch (ex) {
      return rejectWithValue(getExceptionPayload(ex) as ApiRequestErrorType);
    }
  }
);
