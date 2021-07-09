import React from 'react';

import { Header, Footer } from '../../components';

import { Container } from './styles';

const SignInPage: React.FC = () => {
  return (
    <Container>
      <div className="main-div">
        <Header isHomePage />
      </div>
      <Footer />
    </Container>
  );
};

export default SignInPage;
