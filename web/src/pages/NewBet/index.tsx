import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { types } from '../../utils/games.json';

import {
  Header,
  Footer,
  GameButton,
  NumberButton,
  Cart,
  Button,
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
              {types.map(game => (
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
          </div>

          <div className="aux-buttons">
            <div className="left-side">
              <Button
                type="button"
                color="#27C383"
                fontSize="16px"
                border="1px solid #27C383"
                padding="24px"
                borderRadius="10px"
              >
                Complete game
              </Button>
              <Button
                type="button"
                color="#27C383"
                fontSize="16px"
                border="1px solid #27C383"
                padding="24px"
                borderRadius="10px"
              >
                Clear game
              </Button>
            </div>
            <Button
              type="button"
              color="#27C383"
              fontSize="16px"
              border="1px solid #27C383"
              padding="24px"
              borderRadius="10px"
              icon={FiShoppingCart}
            >
              Add to cart
            </Button>
          </div>
        </LeftSideDiv>
        <RightSideDiv>
          <Cart />
        </RightSideDiv>
      </Container>
      <Footer />
    </>
  );
};

export default NewBetPage;
