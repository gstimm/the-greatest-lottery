import React from 'react';
import { Bet } from '../../interfaces';
import { formatPrice } from '../../utils/formatPrice';

import { Container, Border, MainContent } from './styles';

interface BetProps {
  bet: Bet;
}

const RecentGamesCard: React.FC<BetProps> = ({ bet }) => {
  return (
    <Container>
      <Border backgroundColor={bet.color} />
      <MainContent>
        <h3>{bet.numbers.join(', ')}</h3>
        <span>
          {bet.date} - ({formatPrice(bet.price)})
        </span>
        <h3 style={{ color: bet.color }}>{bet.type}</h3>
      </MainContent>
    </Container>
  );
};

export default RecentGamesCard;
