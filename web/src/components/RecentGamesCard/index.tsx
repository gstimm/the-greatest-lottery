import React from 'react';
import { Bet } from '../../interfaces';
import { formatPrice, formatDate } from '../../utils/formatData';

import { Container, Border, MainContent } from './styles';

interface BetProps {
  bet: Bet;
}

const RecentGamesCard: React.FC<BetProps> = ({ bet }) => {
  console.log(`CARD: ${bet}`);
  return (
    <Container>
      <Border backgroundColor={bet.color} />
      <MainContent>
        <h3>{bet.numbers.join(', ')}</h3>
        <span>
          {formatDate(bet.date)} - ({formatPrice(bet.price)})
        </span>
        <h3 style={{ color: bet.color }}>{bet.type}</h3>
      </MainContent>
    </Container>
  );
};

export default RecentGamesCard;
