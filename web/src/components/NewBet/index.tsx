import React, { useState, useEffect } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Container } from './styles';
import { Button, GameButton, NumberButton } from '../index';
import { types } from '../../utils/games.json';

interface Game {
  type: string;
  description: string;
  range: number;
  price: number;
  color: string;
  'min-cart-value': number;
  'max-number': number;
}

const NewBet: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<Game>(types[0]);
  const [numbers, setNumbers] = useState<number[]>([]);
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  useEffect(() => {
    setSelectedNumbers([]);
    const newNumbers = [];
    for (let index = 1; index <= selectedGame.range; index++) {
      newNumbers.push(index);
    }
    setNumbers(newNumbers);
  }, [selectedGame]);

  const selectedGameHandler = (game: Game) => {
    setSelectedGame(prevState =>
      prevState.type === game.type ? prevState : game,
    );
  };

  const selectedNumbersHandler = (number: number) => {
    if (numberAlreadySelected(number)) {
      setSelectedNumbers(prevState =>
        prevState.filter(arrayNumber => arrayNumber !== number),
      );
    } else if (maxNumbersAlreadySelected()) {
      setSelectedNumbers(prevState => [...prevState, number]);
    }
  };

  const numberAlreadySelected = (number: number) => {
    return selectedNumbers.some(arrayNumber => arrayNumber === number);
  };

  const maxNumbersAlreadySelected = () => {
    return selectedNumbers.length < selectedGame['max-number'];
  };

  const clearSelectedNumbersHandler = () => {};

  return (
    <Container>
      <h1>
        <span>NEW BET</span> FOR {selectedGame.type}
      </h1>
      <p className="choose-game">Choose a game</p>
      <div className="filter-by-game-name">
        {types.map(game => (
          <GameButton
            type="button"
            gameType={game.type}
            color={game.color}
            border={game.color}
            backgroundColor="#fff"
            onClick={() => selectedGameHandler(game)}
          />
        ))}
      </div>
      <div className="description">
        <p className="fill-bet">Fill your bet</p>
        <p>{selectedGame.description}</p>
      </div>
      <div className="numbers">
        {numbers.map(number => (
          <NumberButton
            onClick={() => selectedNumbersHandler(number)}
            className={numberAlreadySelected(number) ? 'active' : ''}
            backgroundColor={selectedGame.color}
          >
            {number}
          </NumberButton>
        ))}
      </div>

      <div className="action-buttons">
        <div className="left-buttons">
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
            onClick={clearSelectedNumbersHandler}
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
    </Container>
  );
};

export default NewBet;
