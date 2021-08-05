import React from 'react';

import { AsideLogo, NewPassword } from '../../components';

import { Container } from './styles';

const NewPasswordPage: React.FC = () => {
  return (
    <Container>
      <AsideLogo />
      <NewPassword />
    </Container>
  );
};

export default NewPasswordPage;
