import React from 'react';
import { Bet } from '../../interfaces';
import { FontAwesome5 } from '@expo/vector-icons';
import { formatPrice, formatDate } from '../../utils/formatData';
import {
  Container,
  Border,
  MainContent,
  NumbersAndInfoText,
  GameNameText,
  TrashAndInfoView
} from './styles';
import colors from '../../utils/colors';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeBet } from '../../store/ducks/cart';

interface BetProps {
  bet: Bet;
  index: number;
  length: number;
}

const CartGamesCard: React.FC<BetProps> = ({ bet, index, length }) => {
  const dispatch = useDispatch();

  const removeBetFromCartHandler = (betIndex: number, price: number) => {
    dispatch(removeBet(betIndex, price));
  };

  return (
    <Container style={{
      marginTop: index === 0 ? 0 : 25,
      marginBottom: index === length - 1 ? 50 : 0
    }}>
      <Border style={{ backgroundColor: bet.color }} />
      <MainContent>
        <NumbersAndInfoText
          style={{ fontWeight: 'bold' }}
        >
          {bet.numbers.join(', ')}
        </NumbersAndInfoText>
        <TrashAndInfoView>
          <NumbersAndInfoText>
            {formatDate(bet.date)} - ({formatPrice(bet.price)})
          </NumbersAndInfoText>
          <TouchableOpacity onPress={() => removeBetFromCartHandler(index, bet.price)}>
            <FontAwesome5 name="trash-alt" color={colors.titleGray} size={18} />
          </TouchableOpacity>
        </TrashAndInfoView>
        <GameNameText
          style={{ color: bet.color }}
        >
          {bet.type}
        </GameNameText>
      </MainContent>
    </Container>
  );
};

export default CartGamesCard;
