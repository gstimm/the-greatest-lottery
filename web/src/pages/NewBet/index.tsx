import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import API from '../../utils/games.json';

import {
  Header,
  Footer,
  Button,
  GameButton,
  NumberButton,
} from '../../components';

import { Container, RightSideDiv, LeftSideDiv } from './styles';

const NewBetPage: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <LeftSideDiv>
          <div className="recent-games-header">
            <h1>
              <strong>NEW BET</strong> FOR
            </h1>
            <p>
              <strong>Choose a game</strong>
            </p>
            <div className="filter-by-game-name">
              {API.types.map(game => (
                <GameButton
                  type="button"
                  gameType={game.type}
                  color={game.color}
                  border={game.color}
                  backgroundColor="#fff"
                />
              ))}
            </div>
            <p>
              <strong>Fill your bet</strong>
            </p>
            <p>
              Fill your bet Mark as many numbers as you want up to a maximum of
              50. Win by hitting 15, 16, 17, 18, 19, 20 or none of the 20
              numbers drawn.
            </p>
          </div>
          <div className="numbers-div">
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
          </div>
        </LeftSideDiv>
        <RightSideDiv>
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
        </RightSideDiv>
      </Container>
      <Footer />
    </>
  );
};

export default NewBetPage;
