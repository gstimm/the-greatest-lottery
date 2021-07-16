import React from 'react';

import { Header, RecentGames } from '../../components';

import { Container } from './styles';

const HomePage: React.FC = () => {
  return (
    <>
      <Header isHomePage />
      <Container>
        <RecentGames />
      </Container>
    </>
  );
};

export default HomePage;
