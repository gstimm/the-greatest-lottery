import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import API from '../../utils/games.json';

import {
  Header,
  Footer,
  Button,
  GameButton,
  RecentGamesCard,
} from '../../components';

import { Container, RecentGamesDiv, NewGameDiv } from './styles';

const SignInPage: React.FC = () => {
  return (
    <>
      <Header isHomePage />
      <Container>
        <RecentGamesDiv>
          <h1>RECENT GAMES</h1>
          <RecentGamesCard />
          <RecentGamesCard />
          <RecentGamesCard />
        </RecentGamesDiv>
        <NewGameDiv>
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
        </NewGameDiv>
        {/* {API.types.map(game => (
          <GameButton
            type="button"
            gameType={game.type}
            color={game.color}
            border={game.color}
            backgroundColor="#fff"
          />
        ))} */}
      </Container>
      <Footer />
    </>
  );
};

export default SignInPage;
