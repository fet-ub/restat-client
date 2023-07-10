import React, { useCallback, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useTranslation } from "react-i18next";

import DashboardPage from "./pages/dashboard/Dashboard.page";
import AuthPage from "./pages/auth/Auth.page";
import LoginPage from "./pages/auth/login/Login.page";
import ForgotPasswordPage from "./pages/auth/forgot-password/ForgotPassword.page";
import NotfoundPage from "./pages/404/Notfound.page";
import IndexPage from "./pages/dashboard/index/Index.page";
import SettingsPage from "./pages/dashboard/settings/Settings.page";
import UsersPage from "./pages/dashboard/users/Users.page";
import StudentsPage from "./pages/dashboard/students/Students.page";
import TranscriptPage from "./pages/dashboard/transcript/Transcript.page";
import CoursesPage from "./pages/dashboard/courses/Courses.page";
import CaPage from "./pages/dashboard/ca/Ca.page";
import ExamPage from "./pages/dashboard/exam/Exam.page";
import EncryptionCaPage from "./pages/dashboard/encryption-ca/EncryptionCa.page";
import { LocalStorage } from "./storage/LocalStorage";
import AlertComponent from "./components/common/alert/Alert.component";
import { useAppDispatch, useAppSelector } from "./lib/hooks";
import {
  NotificationStatus,
  resetNotificationState,
} from "./app/feature/notification/notification.slice";

const App = () => {
  const { i18n } = useTranslation(["home", "main"]);
  const notification = useAppSelector((state) => state.notificationState);
  const dispatch = useAppDispatch();

  const languageLocalConfig = useCallback(async (local: string) => {
    LocalStorage.storeAppLang(local);
    await i18n.changeLanguage(local);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (
      LocalStorage.getAppLang().appLang !== undefined &&
      LocalStorage.getAppLang().appLang !== null
    ) {
      languageLocalConfig(LocalStorage.getAppLang().appLang as string);
    } else {
      languageLocalConfig("en");
    }

    // eslint-disable-next-line
  }, [window.location.pathname]);

  useEffect(() => {
    if (notification.status !== NotificationStatus.HIDDEN) {
      setTimeout(() => {
        dispatch(resetNotificationState());
      }, 4000);
    }
    // eslint-disable-next-line
  }, [notification]);

  return (
    <div className="app">
      <Router>
        <AlertComponent />
        <Routes>
          <Route path="/" element={<Navigate replace to="/auth" />} />

          <Route path="/dashboard" element={<DashboardPage />}>
            <Route index element={<IndexPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="students" element={<StudentsPage />} />
            <Route path="courses" element={<CoursesPage />} />
            <Route path="transcript" element={<TranscriptPage />} />
            <Route path="ca" element={<CaPage />} />
            <Route path="exam" element={<ExamPage />} />
            <Route path="encrypt-ca" element={<EncryptionCaPage />} />
          </Route>

          <Route path="/auth" element={<AuthPage />}>
            <Route index element={<Navigate replace to="/auth/login" />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="forgot-password" element={<ForgotPasswordPage />} />
          </Route>

          <Route path="*" element={<NotfoundPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
