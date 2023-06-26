import React from 'react'

import AuthLayout from '../../../components/Layout/auth/Auth.layout';
import LoginTemplate from '../../../components/template/auth/login/Login.template';

const LoginPage = () => {
  
  return (
    <AuthLayout>
      <LoginTemplate/>
    </AuthLayout>
  
  );
}

export default LoginPage