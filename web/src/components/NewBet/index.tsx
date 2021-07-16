import React, { useState, useMemo } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { format } from 'date-fns';
import { Container } from './styles';
import { Button, GameButton, NumberButton } from '../index';
import { types } from '../../utils/games.json';
import { addBet } from '../../store/ducks/cart';

interface Game {
  type: string;
  description: string;
  range: number;
  price: number;
  color: string;
  'min-cart-value': number;
  'max-number': number;
}

interface Bet {
  id: string;
  type: string;
  color: string;
  price: number;
  date: string;
  numbers: number[];
}

const NewBet: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<Game>(types[0]);
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const dispatch = useDispatch();

  const numbers = useMemo(() => {
    setSelectedNumbers([]);
    return Array.from({ length: selectedGame.range }, (_, i) => i + 1);
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

  const numberAlreadySelected = (number: number): boolean => {
    return selectedNumbers.some(arrayNumber => arrayNumber === number);
  };

  const maxNumbersAlreadySelected = () => {
    return selectedNumbers.length < selectedGame['max-number'];
  };

  const clearSelectedNumbersHandler = () => {
    setSelectedNumbers([]);
  };

  const completeGameHandler = () => {
    let auxArray = selectedNumbers;

    if (auxArray.length === selectedGame['max-number']) {
      auxArray = [];
    }

    while (auxArray.length < selectedGame['max-number']) {
      const randomNumber = Math.ceil(Math.random() * selectedGame.range);

      const hasInArray = auxArray.some(number => {
        return number === randomNumber;
      });

      if (!hasInArray) {
        auxArray.push(randomNumber);
      }
    }

    setSelectedNumbers([...auxArray]);
  };

  const addToCartHandler = () => {
    if (selectedNumbers.length < selectedGame['max-number']) {
      toast.warning('Please complete the bet before add to cart');
      return;
    }

    const bet: Bet = {
      id: v4(),
      type: selectedGame.type,
      color: selectedGame.color,
      price: selectedGame.price,
      date: format(new Date(), 'dd/MM/yyyy'),
      numbers: selectedNumbers.sort((a, b) => a - b),
    };

    dispatch(addBet(bet));
    clearSelectedNumbersHandler();
  };

  return (
    <Container>
      <h1>
        <span>NEW BET</span> FOR {selectedGame.type}
      </h1>
      <p className="choose-game">Choose a game</p>
      <div className="smaller">
        <div className="filter-by-game-name">
          {types.map(game => (
            <GameButton
              key={game.type}
              type="button"
              gameType={game.type}
              color={game.color}
              border={game.color}
              backgroundColor="#fff"
              onClick={() => selectedGameHandler(game)}
            />
          ))}
        </div>
      </div>
      <div className="description">
        <p className="fill-bet">Fill your bet</p>
        <p>{selectedGame.description}</p>
      </div>
      <div className="numbers">
        {numbers.map(number => {
          return (
            <NumberButton
              key={`${selectedGame.type}-${number}`}
              onClick={() => selectedNumbersHandler(number)}
              className={numberAlreadySelected(number) ? 'active' : 'inactive'}
              backgroundColor={selectedGame.color}
            >
              {number}
            </NumberButton>
          );
        })}
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
            onClick={completeGameHandler}
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
          color="#fff"
          fontSize="16px"
          border="1px solid #27C383"
          backgroundColor="#27C383"
          padding="24px"
          borderRadius="10px"
          className="add-to-cart-button"
          icon={FiShoppingCart}
          onClick={addToCartHandler}
        >
          Add to cart
        </Button>
      </div>
    </Container>
  );
};

export default NewBet;
