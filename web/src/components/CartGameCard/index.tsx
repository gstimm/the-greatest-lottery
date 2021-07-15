import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { formatPrice } from '../../utils/formatPrice';

import { Container, Border, MainContent } from './styles';

interface IProps {
  bet: {
    id: string;
    type: string;
    color: string;
    price: number;
    date: string;
    numbers: number[];
  };
}

const RecentGamesCard: React.FC<IProps> = ({ bet }) => {
  return (
    <Container>
      <button type="button">
        <FiTrash2 size={32} color="#888888" className="icon" />
      </button>
      <Border backgroundColor={bet.color} />
      <MainContent>
        <h3>{bet.numbers.sort((a, b) => a - b).join(', ')}</h3>
        <div>
          <h3 style={{ color: bet.color }}>{bet.type}</h3>
          <p>{formatPrice(bet.price)}</p>
        </div>
      </MainContent>
    </Container>
  );
};

export default RecentGamesCard;
