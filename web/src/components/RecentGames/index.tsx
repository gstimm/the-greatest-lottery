import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { Container } from './styles';
import { RecentGamesCard, GameButton, Button } from '../index';
import { types } from '../../utils/games.json';
import { ApplicationStore } from '../../store';
import { BetState } from '../../store/ducks/bet';

const RecentGames: React.FC = () => {
  const { bets } = useSelector<ApplicationStore, BetState>(state => state.Bet);

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
              margin="0 0 0 25px;"
            >
              New Bet
            </Button>
          </Link>
        </div>
      </div>
      <div className="recent-bets-card">
        {bets.map(bet => (
          <RecentGamesCard key={bet.id} bet={bet} />
        ))}
      </div>
    </Container>
  );
};

export default RecentGames;
