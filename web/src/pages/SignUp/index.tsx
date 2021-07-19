import React from 'react';

import { AsideLogo, SignUp } from '../../components';

import { Container } from './styles';

const SignUpPage: React.FC = () => {
  return (
    <Container>
      <AsideLogo />
      <SignUp />
    </Container>
  );
};

export default SignUpPage;
