import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  max-width: 1106px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
`;

export const RecentGamesDiv = styled.div`
  height: 100%;
  width: 100%;

  .recent-games-header {
    display: flex;
    align-items: center;
    height: 130px;
  }

  h1 {
    margin-right: 45px;
    color: #707070;
    font-size: 24px;
  }

  p {
    margin-right: 15px;
    color: #868686;
    font-size: 17px;
  }

  .filter-by-game-name {
    display: flex;

    button {
      margin-right: 25px;
    }
  }
`;

export const NewGameDiv = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: flex-end;

  button {
    margin-top: 74px;
    width: 100%;
    align-content: right;
  }
`;
