import React from 'react';

import { AsideLogo, MainRightSignUp } from '../../components';

import { Container } from './styles';

const SignUpPage: React.FC = () => {
  return (
    <Container>
      <AsideLogo />
      <MainRightSignUp />
    </Container>
  );
};

export default SignUpPage;
