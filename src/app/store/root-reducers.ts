import loginSlice from "../feature/auth/slices/login.slice";
import notificationSlice from "../feature/notification/notification.slice";
import createUserSlice from "../feature/user/slices/createUser.slice";

export default {
  loginState: loginSlice,
  notificationState: notificationSlice,
  createUserState: createUserSlice,
};
