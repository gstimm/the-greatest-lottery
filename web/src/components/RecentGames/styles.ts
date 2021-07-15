import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .recent-games-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 70.5px 0 33px 0;

    h1 {
      color: #707070;
      text-transform: uppercase;
      font: italic bold 24px sans-serif;
      margin-right: 45px;
      align-self: center;
    }

    p {
      color: #707070;
      font-size: 17px;
      align-self: center;
      margin-right: 15px;
    }

    .filter-by-game-name {
      display: flex;

      button + button {
        margin-left: 25px;
      }
    }

    .new-game-link {
    }
  }

  .recent-bets-card {
    width: 100%;
  }
`;
