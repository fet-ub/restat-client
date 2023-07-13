import { createAsyncThunk } from "@reduxjs/toolkit";

import { StudentService } from "../../../../services/student.service";
import { getExceptionPayload } from "../../../../lib/utils/get-exception-payload";
import { ApiRequestErrorType } from "../../../../types/api.types";
import { StudentRequestType } from "../../../../types/student.type";

const studentService = new StudentService();

export const createStudentThunk = createAsyncThunk(
  "/createNewStudent",
  async (data: StudentRequestType, { rejectWithValue }) => {
    try {
      const response = await studentService.createNewStudent(data);

      console.log({ response });

      return response?.data;
    } catch (ex) {
      return rejectWithValue(getExceptionPayload(ex) as ApiRequestErrorType);
    }
  }
);

export const createBulkStudentThunk = createAsyncThunk(
  "/createBulkNewStudents",
  async (data: StudentRequestType[], { rejectWithValue }) => {
    try {
      const response = await studentService.createBulkNewStudents(data);

      console.log({ response });

      return response?.data;
    } catch (ex) {
      return rejectWithValue(getExceptionPayload(ex) as ApiRequestErrorType);
    }
  }
);

export const getStudentsThunk = createAsyncThunk(
  "/getStudents",
  async (_, { rejectWithValue }) => {
    try {
      const response = await studentService.getStudents();

      // console.log({ response });

      return response?.data;
    } catch (ex) {
      return rejectWithValue(getExceptionPayload(ex) as ApiRequestErrorType);
    }
  }
);

export const deleteStudentThunk = createAsyncThunk(
  "/deleteStudent",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await studentService.deleteStudent(id);

      console.log({ response });

      return response?.data;
    } catch (ex) {
      return rejectWithValue(getExceptionPayload(ex) as ApiRequestErrorType);
    }
  }
);
