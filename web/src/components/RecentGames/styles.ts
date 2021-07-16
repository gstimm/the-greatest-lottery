import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  @media screen and (max-width: 400px) {
    .filters {
      flex-direction: column;
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
      margin: 0;
    }

    button + button {
      margin: 0;
    }
  }

  @media screen and (min-width: 401px) and (max-width: 566px) {
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
    button + button {
      margin-left: 25px;
    }
  }

  @media screen and (min-width: 567px) and (max-width: 842px) {
    .filter-by-game-name {
      flex-direction: column;
    }
    h1 {
      margin: 0 0 10px 0;
    }
    p {
      margin: 0 0 10px 0;
    }
    button:first-child {
      margin-left: 25px;
    }
    .new-game-link {
      align-self: flex-start;
    }
    button + button {
      margin-left: 25px;
    }
  }

  @media screen and (min-width: 843px) {
    h1 {
      margin-right: 45px;
    }
    p {
      margin-right: 15px;
    }
    .new-game-link {
      align-self: flex-start;
    }
    button + button {
      margin-left: 25px;
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

    .filters {
      display: flex;
    }

    .filter-by-game-name {
      display: flex;
    }
  }
`;
