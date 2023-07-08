/* eslint-disable */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum NotificationStatus {
  ERROR,
  SUCCESS,
  HIDDEN,
}

type InitialStateTypes = {
  status: NotificationStatus;
  message: string;
};

const initialState: InitialStateTypes = {
  status: NotificationStatus.HIDDEN,
  message: "",
};

const notificationSlice = createSlice({
  name: "loginSlice",
  initialState: initialState,
  reducers: {
    resetNotificationState: (state) => {
      state.status = NotificationStatus.HIDDEN;
      state.message = "";
    },

    setNotificationState: (
      state,
      action: PayloadAction<{ message: string; status: NotificationStatus }>
    ) => {
      state.status = action.payload.status;
      state.message = action.payload.message;
    },
  },
});

export const { resetNotificationState, setNotificationState } =
  notificationSlice.actions;
export default notificationSlice.reducer;
