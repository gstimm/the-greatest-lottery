import React from 'react';

import { AsideLogo, Footer, MainRightSignIn } from '../../components';

import { Container } from './styles';

const SignInPage: React.FC = () => {
  return (
    <Container>
      <div className="main-div">
        <AsideLogo />
        <MainRightSignIn />
      </div>
      <Footer />
    </Container>
  );
};

export default SignInPage;
