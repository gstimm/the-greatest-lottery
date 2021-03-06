import React, { useState, useEffect } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Container } from './styles';
import { Button, GameButton, NumberButton } from '../index';
import { addBet } from '../../store/ducks/cart';
import { Bet, Game } from '../../interfaces';
import { useTypes } from '../../hooks/useTypes';

export interface NewBetProps {
  types: Game[];
}

const NewBet: React.FC = () => {
  const { types } = useTypes();

  const [selectedGame, setSelectedGame] = useState<Game>(types[0]);
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [numbers, setNumbers] = useState<number[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedGame(types[0]);
  }, [types]);

  useEffect(() => {
    setSelectedNumbers([]);
    setNumbers(Array.from({ length: selectedGame?.range }, (_, i) => i + 1));
  }, [selectedGame, setNumbers]);

  const selectedGameHandler = (game: Game) => {
    setSelectedGame(prevState =>
      prevState?.type === game.type ? prevState : game,
    );
  };

  const selectedNumbersHandler = (number: number) => {
    if (!maxNumbersAlreadySelected()) {
      setSelectedNumbers(prevState => [...prevState, number]);
    } else if (numberAlreadySelected(number)) {
      setSelectedNumbers(prevState =>
        prevState?.filter(arrayNumber => arrayNumber !== number),
      );
    }
  };

  const numberAlreadySelected = (number: number): boolean => {
    return selectedNumbers.some(arrayNumber => arrayNumber === number);
  };

  const maxNumbersAlreadySelected = () => {
    return selectedNumbers.length >= selectedGame.max_number;
  };

  const clearSelectedNumbersHandler = () => {
    setSelectedNumbers([]);
  };

  const completeGameHandler = () => {
    let auxArray = selectedNumbers;

    if (auxArray.length === selectedGame.max_number) {
      auxArray = [];
    }

    while (auxArray.length < selectedGame.max_number) {
      const randomNumber = Math.ceil(Math.random() * selectedGame?.range);

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
    if (selectedNumbers.length < selectedGame.max_number) {
      toast.warning('Please complete the bet before add to cart');
      return;
    }

    const bet: Bet = {
      id: selectedGame.id,
      type: selectedGame.type,
      color: selectedGame.color,
      price: selectedGame.price,
      date: new Date().toISOString(),
      numbers: selectedNumbers.sort((a, b) => a - b),
    };

    dispatch(addBet(bet));
    clearSelectedNumbersHandler();
  };

  return (
    <Container>
      <h1>
        <span>NEW BET</span> FOR {selectedGame?.type}
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
              className={selectedGame?.type.includes(game.type) ? 'active' : ''}
              onClick={() => selectedGameHandler(game)}
            />
          ))}
        </div>
      </div>
      <div className="description">
        <p className="fill-bet">Fill your bet</p>
        <p>{selectedGame?.description}</p>
      </div>
      <div className="numbers">
        {numbers.map(number => {
          return (
            <NumberButton
              key={`${selectedGame?.type}-${number}`}
              onClick={() => selectedNumbersHandler(number)}
              className={numberAlreadySelected(number) ? 'active' : 'inactive'}
              backgroundColor={selectedGame?.color}
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
