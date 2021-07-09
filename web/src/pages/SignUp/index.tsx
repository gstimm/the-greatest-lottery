import React from 'react';

import { AsideLogo, Footer, MainRightSignUp } from '../../components';

import { Container } from './styles';

const SignUpPage: React.FC = () => {
  return (
    <Container>
      <div className="main-div">
        <AsideLogo />
        <MainRightSignUp />
      </div>
      <Footer />
    </Container>
  );
};

export default SignUpPage;
