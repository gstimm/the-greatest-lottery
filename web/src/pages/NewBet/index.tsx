import React from 'react';

import { Header, NewBet, Cart } from '../../components';

import { Container } from './styles';

const NewBetPage: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <NewBet />
        <Cart />
      </Container>
    </>
  );
};

export default NewBetPage;
