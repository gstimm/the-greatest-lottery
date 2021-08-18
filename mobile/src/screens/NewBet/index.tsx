import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { Header, ButtonGame, ButtonNumber, ButtonFunctional } from '../../components/index';
import {
  Container,
  Title,
  PushView,
  FillYourBetText,
  DescriptionText,
  FilterText,
  FiltersView,
  NumbersView,
  TitleAndFiltersView,
  FunctionalButtonView
} from './styles';
import { useTypes } from '../../hooks/useTypes';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationStore } from '../../store';
import { Bet, Game } from '../../interfaces';
import { FlatList, ScrollView } from 'react-native';
import { addBet, CartState } from '../../store/ducks/cart';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { HeaderNavigationProp } from '../../components/Header';
import Toast from 'react-native-toast-message';

const NewBetScreen: React.FC = () => {
  const { types } = useTypes();
  const [selectedGame, setSelectedGame] = useState<Game>(types[0]);
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [numbers, setNumbers] = useState<number[]>([]);
  const { cartBets } = useSelector<ApplicationStore, CartState>(state => state.Cart);

  const reduxDispatch = useDispatch();
  const { dispatch } = useNavigation<HeaderNavigationProp>()

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
    setSelectedNumbers([]);
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
      Toast.show({
        type: 'warning',
        text1: 'Failed',
        text2: 'Please complete the bet before add to cart',
        topOffset: 50,
        bottomOffset: 50,
        position: 'top',
      })
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

    reduxDispatch(addBet(bet));
    clearSelectedNumbersHandler();
    dispatch(DrawerActions.openDrawer())
  };

  return (
    <>
      <Header isNewBetPage={true} isEmptyCart={cartBets.length === 0 ? true : false} />
      <Container>
        <TitleAndFiltersView>
          <Title>NEW BET FOR {selectedGame?.type}</Title>
          <FilterText>Choose a game</FilterText>
          <FiltersView style={{ marginBottom: selectedNumbers.length === 0 ? 23 : 13 }}>
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
          {selectedNumbers.length === 0 &&
            <>
              <FillYourBetText>Fill your bet</FillYourBetText>
              <DescriptionText>{selectedGame?.description}</DescriptionText>
            </>
          }
          {selectedNumbers.length > 0 &&
            selectedNumbers.sort((a, b) => a - b) &&
            <>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {selectedNumbers.map(item => (
                  <ButtonNumber
                    key={`${selectedGame?.type}-${item}-selected`}
                    onPress={() => selectedNumbersHandler(item)}
                    backgroundColor={selectedGame?.color}
                    size='40px'
                    fontSize='13px'
                    style={{ marginRight: 10 }}
                    isSelected={true}
                  >
                    {item < 10 ? '0' + item : item}
                  </ButtonNumber>
                ))}
              </ScrollView>
              <FunctionalButtonView>
                <ButtonFunctional
                  type='button'
                  color='#B5C401'
                  borderColor='#B5C401'
                  backgroundColor='#fff'
                  margin='0 0 0 0'
                  fontSize='13px'
                  onPress={completeGameHandler}
                >Complete game</ButtonFunctional>
                <ButtonFunctional
                  type='button'
                  color='#B5C401'
                  borderColor='#B5C401'
                  backgroundColor='#fff'
                  margin='0 0 0 0'
                  fontSize='13px'
                  onPress={clearSelectedNumbersHandler}
                >Clear game</ButtonFunctional>
                <ButtonFunctional
                  type='button'
                  color='#fff'
                  borderColor='#B5C401'
                  backgroundColor='#B5C401'
                  margin='0 0 0 0'
                  isCartButton={true}
                  fontSize='13px'
                  onPress={addToCartHandler}
                >Add to cart</ButtonFunctional>
              </FunctionalButtonView>
            </>
          }
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
                key={`${selectedGame?.type}-${item}`}
                onPress={() => selectedNumbersHandler(item)}
                backgroundColor={selectedNumbers.includes(item) ? selectedGame?.color : '#ADC0C4'}
                size='59px'
                fontSize='18px'
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
