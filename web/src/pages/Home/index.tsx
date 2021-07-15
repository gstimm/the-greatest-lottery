import React from 'react';

import { Header, Footer, RecentGames } from '../../components';

import { Container } from './styles';

const HomePage: React.FC = () => {
  return (
    <>
      <Header isHomePage />
      <Container>
        <RecentGames />
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
