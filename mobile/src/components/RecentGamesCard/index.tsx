import React from 'react';
import { Bet } from '../../interfaces';
import { formatPrice, formatDate } from '../../utils/formatData';

import { Container, Border, MainContent, NumbersAndInfoText, GameNameText } from './styles';

interface BetProps {
  bet: Bet;
  index: number;
  length: number;
}

const RecentGamesCard: React.FC<BetProps> = ({ bet, index, length }) => {
  return (
    <Container style={{ marginTop: index === 0 ? 161 : 25, marginBottom: index === length - 1 ? 150 : 0 }}>
      <Border style={{ backgroundColor: bet.color}}/>
      <MainContent>
        <NumbersAndInfoText
          style={{ fontWeight: 'bold' }}
        >
          {bet.numbers.join(', ')}
        </NumbersAndInfoText>
        <NumbersAndInfoText>
          {formatDate(bet.date)} - ({formatPrice(bet.price)})
        </NumbersAndInfoText>
        <GameNameText
          style={{ color: bet.color }}
        >
          {bet.type}
        </GameNameText>
      </MainContent>
    </Container>
  );
};

export default RecentGamesCard;
