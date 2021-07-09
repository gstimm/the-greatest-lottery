import React from 'react';

import { Container, Border, MainContent } from './styles';

const RecentGamesCard: React.FC = () => {
  return (
    <Container>
      <Border />
      <MainContent>
        <h3>1,2,3,4,5</h3>
        <span>30/11/2020 - (R$ 2,50)</span>
        <h3>Lotofácil</h3>
      </MainContent>
    </Container>
  );
};

export default RecentGamesCard;
