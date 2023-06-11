import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

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

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/auth" />} />

          <Route path="/dashboard" element={<DashboardPage />}>
            <Route index element={<IndexPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="students" element={<StudentsPage />} />
            <Route path="courses" element={<CoursesPage />} />
            <Route path="transcript" element={<TranscriptPage />} />
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
}

export default App;
