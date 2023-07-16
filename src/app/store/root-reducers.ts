import loginSlice from "../feature/auth/slices/login.slice";
import createCaMarkSlice from "../feature/ca-mark/slices/createCaMark.slice";
import createCourseSlice from "../feature/course/slices/createCourse.slice";
import deleteCourseSlice from "../feature/course/slices/deleteCourse.slice";
import getCoursesSlice from "../feature/course/slices/getCourses.slice";
import getLecturersSlice from "../feature/lecturer/slice/getLecturers.slice";
import notificationSlice from "../feature/notification/notification.slice";
import createBulkStudentsSlice from "../feature/student/slice/createBulkStudents.slice";
import createStudentSlice from "../feature/student/slice/createStudent.slice";
import deleteStudentSlice from "../feature/student/slice/deleteStudent.slice";
import getStudentsSlice from "../feature/student/slice/getStudents.slice";
import createUserSlice from "../feature/user/slices/createUser.slice";
import getUsersSlice from "../feature/user/slices/getUsers.slice";

/* eslint-disable */

export default {
  loginState: loginSlice,
  notificationState: notificationSlice,
  createUserState: createUserSlice,
  getUsersState: getUsersSlice,
  createCourseState: createCourseSlice,
  getCoursesState: getCoursesSlice,
  deleteCourseState: deleteCourseSlice,
  createStudentState: createStudentSlice,
  createBulkStudentState: createBulkStudentsSlice,
  getStudentsState: getStudentsSlice,
  deleteStudentState: deleteStudentSlice,
  createCaMarkState: createCaMarkSlice,
  getLecturersState: getLecturersSlice,
};
