import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { Button, CartGameCard, Card } from '../index';
import { Container } from './styles';

const Cart: React.FC = () => {
  return (
    <Card width="317px" margin="42px 0 0 0">
      <Container>
        <h1>CART</h1>
        <CartGameCard />
        <CartGameCard />
        <h2>
          <strong>CART</strong> TOTAL: R$ 7,00
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
