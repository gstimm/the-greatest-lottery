import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { Header, ButtonGame, RecentGamesCard } from '../../components/index';
import {
  Container,
  Title,
  FilterText,
  FiltersView,
  CardsView,
  NoItemsText,
  TitleAndFiltersView,
  LoaderView,
  EndText
} from './styles';
import { useTypes } from '../../hooks/useTypes';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationStore } from '../../store';
import { BetState, clearRecentBets, getBetRequest } from '../../store/ducks/bet';
import { FlatList, ScrollView } from 'react-native';
import { ListSpinner } from '../../components/index';

const RecentGamesScreen: React.FC = () => {
  const { types } = useTypes();
  const { bets, page, isListEnd, loading } = useSelector<ApplicationStore, BetState>(
    state => state.Bet
  );
  const dispatch = useDispatch();

  const [filters, setFilters] = useState<number[]>([]);

  const fetchMore = () => {
    dispatch(getBetRequest(page, filters));
  }

  useEffect(() => {
    dispatch(clearRecentBets());
    dispatch(getBetRequest(1, filters));
  }, [filters])

  const betFilterHandler = (id: number) => {
    let auxArray = filters;

    const options = types.find(gameType => gameType.id === id);

    if (options) {
      if (filters.includes(options.id)) {
        auxArray = filters.filter(filter => filter !== options.id);
      } else {
        auxArray = [...filters, options.id];
      }
    }

    setFilters(auxArray);
  };

  const renderSpinner = () => {
    if (!isListEnd) {
      return (
        <LoaderView>
          <ListSpinner />
        </LoaderView>
      )
    }
    return (
      <LoaderView>
        <EndText>That's all folks!</EndText>
      </LoaderView>
    )
  }

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
                  color={filters.includes(game.id) ? '#fff' : game.color}
                  borderColor={game.color}
                  backgroundColor={filters.includes(game.id) ? game.color : '#fff'}
                  margin="0 9px 0 0"
                  isSelected={filters.includes(game.id) ? true : false}
                  onPress={() => betFilterHandler(game.id)}
                />
              ))}
            </ScrollView>
          </FiltersView>
        </TitleAndFiltersView>
        <CardsView>
          {bets.length === 0 && filters.length === 0 && !loading &&
            <NoItemsText>No games yet? Lets make some new ones!</NoItemsText>
          }
          {filters.length > 0 && bets.length === 0 && !loading &&
            <NoItemsText>No games found for this filters!</NoItemsText>
          }
          {filters.length >= 0 && bets.length === 0 && loading &&
            <ListSpinner />
          }
          {filters.length >= 0 && bets.length > 0 && (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={bets}
              keyExtractor={bet => `${bet.id}`}
              onEndReached={fetchMore}
              onEndReachedThreshold={0.1}
              ListFooterComponent={renderSpinner}
              renderItem={({ item, index }) => (
                <RecentGamesCard
                  key={item.id}
                  bet={item}
                  index={index}
                  length={bets.length}
                />
              )}
            />
          )}
        </CardsView>
      </Container>
    </>
  );
};

export default RecentGamesScreen;
