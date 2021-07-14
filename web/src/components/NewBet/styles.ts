import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  h1 {
    color: #707070;
    text-transform: uppercase;
    font: italic normal 24px sans-serif;
    margin: 73.5px 0 33px 0;
  }

  span {
    font-weight: bold;
  }

  strong {
    color: #707070;
    font-size: 17px;
  }

  p {
    color: #707070;
    font-size: 17px;
    margin-bottom: 27px;
  }

  .fill-bet {
    margin-bottom: 8px;
    font-weight: bold;
  }

  .choose-game {
    margin-bottom: 20px;
    font-weight: bold;
  }

  .filter-by-game-name {
    display: flex;
    margin-bottom: 20px;

    button + button {
      margin-left: 25px;
    }
  }

  .numbers {
    display: flex;
    flex-wrap: wrap;
  }

  .action-buttons {
    display: flex;
    justify-content: space-between;
    margin: 24px 0 145.5px 0;
  }

  .left-buttons {
    display: flex;

    button:first-child {
      margin-right: 25px;
    }
  }
`;
