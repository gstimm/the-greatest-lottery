import React from 'react';

import { SignInForm } from '../index';

import { Container, H1 } from './styles';

const MainRight: React.FC = () => {
  return (
    <Container>
      <H1>Authentication</H1>
      <SignInForm />
    </Container>
  );
};

export default MainRight;
