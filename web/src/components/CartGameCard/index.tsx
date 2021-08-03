import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { Bet } from '../../interfaces';
import { removeBet } from '../../store/ducks/cart';
import { formatPrice } from '../../utils/formatData';

import { Container, Border, MainContent } from './styles';

interface IProps {
  bet: Bet;
}

const RecentGamesCard: React.FC<IProps> = ({ bet }) => {
  const dispatch = useDispatch();

  const removeBetFromCartHandler = (id: number, price: number) => {
    dispatch(removeBet(id, price));
  };

  return (
    <Container>
      <button
        type="button"
        onClick={() => removeBetFromCartHandler(bet.id, bet.price)}
      >
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
