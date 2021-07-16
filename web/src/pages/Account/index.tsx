import React from 'react';

import { Header, AccountData } from '../../components';

import { Container } from './styles';

const AccountPage: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <AccountData />
      </Container>
    </>
  );
};

export default AccountPage;
