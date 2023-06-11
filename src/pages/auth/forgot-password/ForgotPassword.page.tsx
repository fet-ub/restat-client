import React from 'react'

import AuthLayout from '../../../components/Layout/auth/Auth.layout';
import ForgotPasswordTemplate from '../../../components/template/auth/forgot-password/ForgotPassword.template';

const ForgotPasswordPage = () => {
  return (
    <AuthLayout>
      <ForgotPasswordTemplate />
    </AuthLayout>
  );
}

export default ForgotPasswordPage