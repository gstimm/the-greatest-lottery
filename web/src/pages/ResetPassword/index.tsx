import React from 'react';

import { AsideLogo, ResetPassword } from '../../components';

import { Container } from './styles';

const ResetPasswordPage: React.FC = () => {
  return (
    <Container>
      <AsideLogo />
      <ResetPassword />
    </Container>
  );
};

export default ResetPasswordPage;
