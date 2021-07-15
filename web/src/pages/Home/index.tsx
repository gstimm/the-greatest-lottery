import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Header, Footer, Button, RecentGames } from '../../components';

import { Container, NewGameDiv } from './styles';

const HomePage: React.FC = () => {
  return (
    <>
      <Header isHomePage />
      <Container>
        <RecentGames />
        <NewGameDiv>
          <div>
            <Link to="/new-bet">
              <Button
                type="button"
                color="#B5C401"
                fontSize="24px"
                icon={FiArrowRight}
              >
                New Bet
              </Button>
            </Link>
          </div>
        </NewGameDiv>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
