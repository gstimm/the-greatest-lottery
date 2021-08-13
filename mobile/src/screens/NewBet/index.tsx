import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { Header, ButtonGame, RecentGamesCard, ButtonNumber } from '../../components/index';
import { Container, Title, PushView, FillYourBetText, DescriptionText, FilterText, FiltersView, NumbersView, NoItemsText, TitleAndFiltersView } from './styles';
import { useTypes } from '../../hooks/useTypes';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationStore } from '../../store';
import { BetState, getBetRequest } from '../../store/ducks/bet';
import { Bet, Game } from '../../interfaces';
import { FlatList, ScrollView } from 'react-native';
import { addBet } from '../../store/ducks/cart';

const NewBetScreen: React.FC = () => {
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
    if (numberAlreadySelected(number)) {
      setSelectedNumbers(prevState =>
        prevState?.filter(arrayNumber => arrayNumber !== number),
      );
    } else if (!maxNumbersAlreadySelected()) {
      setSelectedNumbers(prevState => [...prevState, number]);
    }
  };
  console.log(selectedNumbers)

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
      alert('Please complete the bet before add to cart');
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
    <>
      <Header />
      <Container>
        <TitleAndFiltersView>
          <Title>NEW BET FOR {selectedGame?.type}</Title>
          <FilterText>Choose a game</FilterText>
          <FiltersView>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {selectedGame && (
                types.map(game => (
                  <ButtonGame
                    key={game.type}
                    type="button"
                    gameType={game.type}
                    color={selectedGame.type === game.type ? '#fff' : game.color}
                    borderColor={selectedGame.type === game.type ? selectedGame.color : game.color}
                    backgroundColor={selectedGame.type === game.type ? game.color : '#fff'}
                    margin="0 9px 0 0"
                    onPress={() => selectedGameHandler(game)}
                  />
                )))}
            </ScrollView>
          </FiltersView>
          <FillYourBetText>Fill your bet</FillYourBetText>
          <DescriptionText>{selectedGame?.description}</DescriptionText>
          <PushView />
        </TitleAndFiltersView>
        <NumbersView>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={numbers}
            numColumns={5}
            columnWrapperStyle={{ justifyContent: 'space-around' }}
            keyExtractor={number => number.toString()}
            renderItem={({ item, index }) => (
              <ButtonNumber
                key={`${selectedGame?.type}=${item}`}
                onPress={() => selectedNumbersHandler(item)}
                backgroundColor={selectedGame?.color}
                style={{
                  marginTop: index < 5 ? 306 : 9,
                  marginBottom: index > numbers.length - 5 ? 150 : 0
                }}
              >
                {item < 10 ? '0' + item : item}
              </ButtonNumber>
            )}
          />
        </NumbersView>
      </Container>
    </>
  );
};

export default NewBetScreen;
