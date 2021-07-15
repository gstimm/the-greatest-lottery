import React from 'react';

import { AsideLogo, MainRightResetPassword } from '../../components';

import { Container } from './styles';

const ResetPasswordPage: React.FC = () => {
  return (
    <Container>
      <AsideLogo />
      <MainRightResetPassword />
    </Container>
  );
};

export default ResetPasswordPage;
