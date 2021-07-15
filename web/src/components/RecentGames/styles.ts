import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .recent-games-header {
    h1 {
      color: #707070;
      text-transform: uppercase;
      font: italic bold 24px sans-serif;
      margin: 73.5px 0 33px 0;
    }

    p {
      color: #707070;
      font-size: 17px;
      margin-bottom: 27px;
    }

    .filter-by-game-name {
      display: flex;
      margin-bottom: 20px;

      button + button {
        margin-left: 25px;
      }
    }
  }

  .recent-bets-card {
    height: 100%;
    width: 100%;
  }
`;
