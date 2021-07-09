import React from 'react';

import { AsideLogo, Footer, MainRightResetPassword } from '../../components';

import { Container } from './styles';

const ResetPasswordPage: React.FC = () => {
  return (
    <Container>
      <div className="main-div">
        <AsideLogo />
        <MainRightResetPassword />
      </div>
      <Footer />
    </Container>
  );
};

export default ResetPasswordPage;
