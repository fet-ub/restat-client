import { createAsyncThunk } from "@reduxjs/toolkit";

import { ExamMarkService } from "../../../../services/examMark.service";
import { getExceptionPayload } from "../../../../lib/utils/get-exception-payload";
import { ApiRequestErrorType } from "../../../../types/api.types";
import { ExamMarkRequestType } from "../../../../types/exam.type";

const examMarkService = new ExamMarkService();

export const createExamMarkThunk = createAsyncThunk(
  "/createCaMark",
  async (data: ExamMarkRequestType[], { rejectWithValue }) => {
    try {
      const response = await examMarkService.createExamMark(data);

      console.log({ response });

      // return response?.data;
    } catch (ex) {
      return rejectWithValue(getExceptionPayload(ex) as ApiRequestErrorType);
    }
  }
);
