import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { Header, ButtonGame, RecentGamesCard } from '../../components/index';
import { Container, Title, FilterText, FiltersView, CardsView, NoItemsText, TitleAndFiltersView } from './styles';
import { useTypes } from '../../hooks/useTypes';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationStore } from '../../store';
import { BetState, getBetRequest } from '../../store/ducks/bet';
import { Bet } from '../../interfaces';
import { FlatList, ScrollView } from 'react-native';

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

  return (
    <>
      <Header isNewBetPage={false} />
      <Container>
        <TitleAndFiltersView>
          <Title>RECENT GAMES</Title>
          <FilterText>Filters</FilterText>
          <FiltersView>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {types.map(game => (
                <ButtonGame
                  key={game.type}
                  type="button"
                  gameType={game.type}
                  color={filters.includes(game.type) ? '#fff' : game.color}
                  borderColor={game.color}
                  backgroundColor={filters.includes(game.type) ? game.color : '#fff'}
                  margin="0 9px 0 0"
                  isSelected={filters.includes(game.type) ? true : false}
                  onPress={() => betFilterHandler(game.type)}
                />
              ))}
            </ScrollView>
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
              showsVerticalScrollIndicator={false}
              data={bets}
              keyExtractor={bet => `${bet.id}`}
              renderItem={({ item, index }) => (
                <RecentGamesCard key={item.id} bet={item} index={index} length={bets.length} />
              )}
            />
          )}
          {filters.length > 0 && filteredArray.length > 0 && (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={filteredArray}
              keyExtractor={bet => `${bet.id}`}
              renderItem={({ item, index }) => (
                <RecentGamesCard key={item.id} bet={item} index={index} length={filteredArray.length} />
              )}
            />
          )}
        </CardsView>
      </Container>
    </>
  );
};

export default RecentGamesScreen;
