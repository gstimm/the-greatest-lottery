import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  @media screen and (max-width: 414px) {
    .filters {
      grid-template-columns: repeat(1, 1fr);
      max-width: 138px;
    }
    .filter-by-game-name {
      flex-direction: column;
      align-items: center;
    }
    .recent-games-header {
      flex-direction: column;
    }
    .new-game-link {
      align-self: center;
      margin-top: 35px;
    }
    h1 {
      margin: 0 0 10px 0;
    }
    p {
      margin: 0 0 10px 0;
    }
    button {
      margin: 0 12.5px 6px;
    }
  }

  @media screen and (min-width: 415px) and (max-width: 590px) {
    .filter-by-game-name {
      flex-direction: column;
    }
    .recent-games-header {
      flex-direction: column;
    }
    .new-game-link {
      align-self: center;
      margin-top: 35px;
    }
    h1 {
      margin: 0 0 10px 0;
    }
    p {
      margin: 0 0 10px 0;
    }
    button {
      margin: 0 12.5px 6px;
    }
    .filters {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      max-width: 414px;
    }
  }

  @media screen and (min-width: 590px) and (max-width: 870px) {
    .filter-by-game-name {
      flex-direction: column;
    }
    h1 {
      margin: 0 0 10px 0;
    }
    p {
      margin: 0 0 10px 0;
    }
    button {
      margin: 0 12.5px 6px;
    }
    .new-game-link {
      align-self: flex-start;
    }
    .filters {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      max-width: 414px;
    }
  }

  @media screen and (min-width: 871px) {
    h1 {
      margin-right: 45px;
    }
    p {
      margin-right: 15px;
    }
    button {
      margin: 0 12.5px 6px;
    }
    .new-game-link {
      align-self: flex-start;
    }
    .filters {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      max-width: 414px;
    }
  }

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
      align-self: center;
    }

    p {
      color: #707070;
      font-size: 17px;
      align-self: center;
    }

    .filter-by-game-name {
      display: flex;
    }
  }

  .recent-bets-card {
    p {
      color: #707070;
    }
  }
`;
