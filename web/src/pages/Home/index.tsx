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

const HomePage: React.FC = () => {
  return (
    <>
      <Header isHomePage />
      <Container>
        <RecentGamesDiv>
          <div className="recent-games-header">
            <h1>RECENT GAMES</h1>
            <p>Filters</p>
            <div className="filter-by-game-name">
              {API.types.map(game => (
                <GameButton
                  key={game.type}
                  type="button"
                  gameType={game.type}
                  color={game.color}
                  border={game.color}
                  backgroundColor="#fff"
                />
              ))}
            </div>
          </div>
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
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
