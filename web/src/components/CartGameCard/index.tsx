import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

import { Container, Border, MainContent } from './styles';

const RecentGamesCard: React.FC = () => {
  return (
    <Container>
      <FiTrash2 size={32} color="#888888" />
      <Border />
      <MainContent>
        <h3>01, 02,04,05,06,07,09,15,17,20,21, 22,23,24,25</h3>
        <h3>
          <strong>Lotofácil</strong> R$ 4,50
        </h3>
      </MainContent>
    </Container>
  );
};

export default RecentGamesCard;
