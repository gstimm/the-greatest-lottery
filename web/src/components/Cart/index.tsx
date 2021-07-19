import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Button, CartGameCard, Card } from '../index';
import { Container } from './styles';
import { ApplicationStore } from '../../store';
import { CartState, removeBet } from '../../store/ducks/cart';
import { addBetRequest } from '../../store/ducks/bet';
import { formatPrice } from '../../utils/formatPrice';

const Cart: React.FC = () => {
  const { bets, totalBetValue } = useSelector<ApplicationStore, CartState>(
    state => state.Cart,
  );

  const dispatch = useDispatch();

  const saveBetHandler = () => {
    if (totalBetValue > 30) {
      toast.warning('The minimum valor for a bet is R$ 30,00.');
      return;
    }
    dispatch(addBetRequest(bets[0])); // CLEAR BETS FROM RECENT GAMES

    // bets.forEach(bet => {
    //   dispatch(addBetRequest(bet));
    // });

    // bets.forEach(bet => {
    //   dispatch(removeBet(bet.id, bet.price));
    // });
  };

  return (
    <Card width="317px" margin="42px auto">
      <Container>
        <h1>CART</h1>
        {bets.length === 0 && (
          <p style={{ margin: '0 0 12px 20px' }}>
            No bets yet? Lets insert a new one!
          </p>
        )}
        <div className="cards">
          {bets.map(bet => (
            <CartGameCard key={bet.id} bet={bet} />
          ))}
        </div>
        <h2>
          <strong>CART</strong> TOTAL: {formatPrice(totalBetValue)}
        </h2>
        <div className="button-container">
          <Link to="/home">
            <Button
              type="button"
              color="#27C383"
              fontSize="35px"
              icon={FiArrowRight}
              onClick={saveBetHandler}
            >
              Save
            </Button>
          </Link>
        </div>
      </Container>
    </Card>
  );
};

export default Cart;
