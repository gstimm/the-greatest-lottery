import React from 'react';
import { formatPrice } from '../../utils/formatPrice';

import { Container, Border, MainContent } from './styles';

interface BetProps {
  bet: {
    id: string;
    type: string;
    color: string;
    price: number;
    date: string;
    numbers: number[];
  };
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
