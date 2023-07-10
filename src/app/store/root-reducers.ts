import loginSlice from "../feature/auth/slices/login.slice";
import createCourseSlice from "../feature/course/slices/createCourse.slice";
import deleteCourseSlice from "../feature/course/slices/deleteCourse.slice";
import getCoursesSlice from "../feature/course/slices/getCourses.slice";
import notificationSlice from "../feature/notification/notification.slice";
import createUserSlice from "../feature/user/slices/createUser.slice";

/* eslint-disable */

export default {
  loginState: loginSlice,
  notificationState: notificationSlice,
  createUserState: createUserSlice,
  createCourseState: createCourseSlice,
  getCoursesState: getCoursesSlice,
  deleteCourseState: deleteCourseSlice,
};
