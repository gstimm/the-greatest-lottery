import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { Header, ButtonGame, RecentGamesCard } from '../../components/index';
import { Container, Title, FilterText, FiltersView, CardsView, NoItemsText, TitleAndFiltersView } from './styles';
import { useTypes } from '../../hooks/useTypes';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationStore } from '../../store';
import { BetState, getBetRequest } from '../../store/ducks/bet';
import { Bet } from '../../interfaces';
import { FlatList } from 'react-native';

const RecentGamesScreen: React.FC = () => {
  const { types } = useTypes();
  const { bets } = useSelector<ApplicationStore, BetState>(state => state.Bet);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBetRequest());
  }, []);

  const [filters, setFilters] = useState<string[]>([]);
  const [filteredArray, setFilteredArray] = useState<Bet[]>([]);

  const betFilterHandler = (type: string) => {
    let auxFiltersArray = filters;

    const options = types.find(gameType => gameType.type === type);

    if (options) {
      if (filters.includes(options.type)) {
        auxFiltersArray = filters.filter(filter => filter !== options.type);
      } else {
        auxFiltersArray = [...filters, options.type];
      }
    }

    const array = bets.filter(bet => auxFiltersArray.includes(bet.type));

    setFilters(auxFiltersArray);
    setFilteredArray([...array]);
  };

  // let data;

  // if (bets.length === 0 && filters.length === 0) {
  //   data = <NoItemsText>No games yet? Lets make some new ones!</NoItemsText>;
  // }
  // if (filters.length > 0 && filteredArray.length === 0) {
  //   data = <NoItemsText>No games found for this filters!</NoItemsText>;
  // }
  // if (filters.length === 0 && bets.length > 0) {
  //   data = bets.map(bet => <RecentGamesCard key={bet.id} bet={bet} />);
  // }
  // if (filters.length > 0 && filteredArray.length > 0) {
  //   data = filteredArray.map(bet => <RecentGamesCard key={bet.id} bet={bet} />);
  // }

  return (
    <>
      <Header />
      <Container>
        <TitleAndFiltersView>
          <Title>RECENT GAMES</Title>
          <FilterText>Filters</FilterText>
          <FiltersView>
            {types.map(game => (
              <ButtonGame
                key={game.type}
                type="button"
                gameType={game.type}
                color={game.color}
                borderColor={game.color}
                margin="0 9px 0 0"
                backgroundColor="#fff"
                // className={filters.includes(game.type) ? 'active' : ''}
                onPress={() => betFilterHandler(game.type)}
              />
            ))}
          </FiltersView>
        </TitleAndFiltersView>
        <CardsView>
          {bets.length === 0 && filters.length === 0 &&
            <NoItemsText>No games yet? Lets make some new ones!</NoItemsText>
          }
          {filters.length > 0 && filteredArray.length === 0 &&
            <NoItemsText>No games found for this filters!</NoItemsText>
          }
          {filters.length === 0 && bets.length > 0 && (
            <FlatList
              data={bets}
              keyExtractor={bet => `${bet.id}`}
              renderItem={({ item, index }) => (
                <RecentGamesCard key={item.id} bet={item} index={index} />
              )}
            />
          )}
          {filters.length > 0 && filteredArray.length > 0 && (
            <FlatList
              data={filteredArray}
              keyExtractor={bet => `${bet.id}`}
              renderItem={({ item, index }) => (
                <RecentGamesCard key={item.id} bet={item} index={index} />
              )}
            />
          )}
        </CardsView>
      </Container>
    </>
  );
};

export default RecentGamesScreen;
