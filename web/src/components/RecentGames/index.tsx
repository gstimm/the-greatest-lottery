import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { Container } from './styles';
import { RecentGamesCard, GameButton, Button } from '../index';
import { types } from '../../utils/games.json';
import { ApplicationStore } from '../../store';
import { Bet, BetState } from '../../store/ducks/bet';

const RecentGames: React.FC = () => {
  const { bets, page } = useSelector<ApplicationStore, BetState>(
    state => state.Bet,
  );

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

  let data;

  // if (bets.length === 0 && filters.length === 0) {
  //   data = <p>No games yet? Lets make some new ones!</p>;
  // }
  // if (filters.length > 0 && filteredArray.length === 0) {
  //   data = <p>No games found for this filters!</p>;
  // }
  // if (filters.length === 0) {
  //   data = bets.map(bet => <RecentGamesCard key={bet.id} bet={bet} />);
  // }
  // if (filters.length > 0) {
  //   data = filteredArray.map(bet => <RecentGamesCard key={bet.id} bet={bet} />);
  // }

  return (
    <Container>
      <div className="recent-games-header">
        <div className="filter-by-game-name">
          <h1>RECENT GAMES</h1>
          <p>Filters</p>
          <div className="filters">
            {types.map(game => (
              <GameButton
                key={game.type}
                type="button"
                gameType={game.type}
                color={game.color}
                border={game.color}
                backgroundColor="#fff"
                className={filters.includes(game.type) ? 'active' : ''}
                onClick={() => betFilterHandler(game.type)}
              />
            ))}
          </div>
        </div>
        <div className="new-game-link">
          <Link to="/new-bet">
            <Button
              type="button"
              color="#B5C401"
              fontSize="24px"
              icon={FiArrowRight}
              margin="0 0 0 25px"
            >
              New Bet
            </Button>
          </Link>
        </div>
      </div>
      <div className="recent-bets-card">{data}</div>
    </Container>
  );
};

export default RecentGames;
