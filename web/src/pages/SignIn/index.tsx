import React from 'react';

import { AsideLogo, Footer, MainRight } from '../../components';

import { Container } from './styles';

const SignInPage: React.FC = () => {
  return (
    <Container>
      <div className="main-div">
        <AsideLogo />
        <MainRight />
      </div>
      <Footer />
    </Container>
  );
};

export default SignInPage;
