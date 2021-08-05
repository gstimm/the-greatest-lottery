import React from 'react';

import { AsideLogo, SignIn } from '../../components';

import { Container } from './styles';

const SignInPage: React.FC = () => {
  return (
    <Container>
      <AsideLogo />
      <SignIn />
    </Container>
  );
};

export default SignInPage;
