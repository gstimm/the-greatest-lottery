import React from 'react';

import { AsideLogo, MainRightSignIn } from '../../components';

import { Container } from './styles';

const SignInPage: React.FC = () => {
  return (
    <Container>
      <AsideLogo />
      <MainRightSignIn />
    </Container>
  );
};

export default SignInPage;
