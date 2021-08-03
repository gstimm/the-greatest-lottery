import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Button, CartGameCard, Card } from '../index';
import { Container } from './styles';
import { ApplicationStore } from '../../store';
import { CartState } from '../../store/ducks/cart';
import { addBetRequest } from '../../store/ducks/bet';
import { formatPrice } from '../../utils/formatData';

const Cart: React.FC = () => {
  const { cartBets, totalBetValue } = useSelector<ApplicationStore, CartState>(
    state => state.Cart,
  );

  const dispatch = useDispatch();
  const { push } = useHistory();

  const saveBetHandler = () => {
    if (totalBetValue < 30) {
      toast.warning('The minimum value for a bet is R$ 30,00.');
      return;
    }

    const bets = cartBets.map(bet => {
      return {
        game_id: bet.id,
        numbers: bet.numbers,
      };
    });

    dispatch(addBetRequest(bets));

    push('/home');
  };

  return (
    <Card width="317px" margin="42px auto">
      <Container>
        <h1>CART</h1>
        {cartBets?.length === 0 && (
          <p style={{ margin: '0 0 12px 20px' }}>
            No bets yet? Lets insert a new one!
          </p>
        )}
        <div className="cards">
          {cartBets.map((bet, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <CartGameCard key={index} bet={bet} index={index} />
          ))}
        </div>
        <h2>
          <strong>CART</strong> TOTAL: {formatPrice(totalBetValue)}
        </h2>
        <div className="button-container">
          <Button
            type="button"
            color="#27C383"
            fontSize="35px"
            icon={FiArrowRight}
            onClick={saveBetHandler}
          >
            Save
          </Button>
        </div>
      </Container>
    </Card>
  );
};

export default Cart;
