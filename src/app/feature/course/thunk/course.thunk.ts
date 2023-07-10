import { createAsyncThunk } from "@reduxjs/toolkit";

import { CourseService } from "../../../../services/course.service";
import { getExceptionPayload } from "../../../../lib/utils/get-exception-payload";
import { ApiRequestErrorType } from "../../../../types/api.types";
import { courseRequestType } from "../../../../types/course.type";

const courseService = new CourseService();

export const createCourseThunk = createAsyncThunk(
  "/createNewCourse",
  async (data: courseRequestType, { rejectWithValue }) => {
    try {
      const response = await courseService.createNewCourse(data);

      // console.log({ response });

      return response?.data;
    } catch (ex) {
      return rejectWithValue(getExceptionPayload(ex) as ApiRequestErrorType);
    }
  }
);

export const getCoursesThunk = createAsyncThunk(
  "/getCourses",
  async (_, { rejectWithValue }) => {
    try {
      const response = await courseService.getCourses();

      // console.log({ response });

      return response?.data;
    } catch (ex) {
      return rejectWithValue(getExceptionPayload(ex) as ApiRequestErrorType);
    }
  }
);

export const deleteCourseThunk = createAsyncThunk(
  "/deleteCourse",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await courseService.deleteCourse(id);

      console.log({ response });

      return response?.data;
    } catch (ex) {
      return rejectWithValue(getExceptionPayload(ex) as ApiRequestErrorType);
    }
  }
);
