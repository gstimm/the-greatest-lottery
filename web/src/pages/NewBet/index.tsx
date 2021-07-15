import React from 'react';

import { Header, Footer, NewBet, Cart } from '../../components';

import { Container } from './styles';

const NewBetPage: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <NewBet />
        <Cart />
      </Container>
      <Footer />
    </>
  );
};

export default NewBetPage;
