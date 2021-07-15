import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CartGameCard, Card } from '../index';
import { Container } from './styles';
import { ApplicationStore } from '../../store';
import { CartState } from '../../store/ducks/cart';

const Cart: React.FC = () => {
  const { bets, totalBetValue } = useSelector<ApplicationStore, CartState>(
    state => state.Cart,
  );

  const dispatch = useDispatch();

  return (
    <Card width="317px" margin="42px 0 0 0">
      <Container>
        <h1>CART</h1>
        {bets.map(bet => (
          <CartGameCard bet={bet} />
        ))}
        <h2>
          <strong>CART</strong> TOTAL: R$ {totalBetValue}
        </h2>
        <div className="button-container">
          <Link to="/home">
            <Button
              type="submit"
              color="#27C383"
              fontSize="35px"
              icon={FiArrowRight}
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
