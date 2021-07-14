import React from 'react';

import { Header, Footer, NewBet } from '../../components';

import { Container } from './styles';

const NewBetPage: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <NewBet />
      </Container>
      <Footer />
    </>
  );
};

export default NewBetPage;
