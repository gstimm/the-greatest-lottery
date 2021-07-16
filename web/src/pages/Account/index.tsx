import React from 'react';

import { Header, RecentGames } from '../../components';

import { Container } from './styles';

const AccountPage: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <RecentGames />
      </Container>
    </>
  );
};

export default AccountPage;
