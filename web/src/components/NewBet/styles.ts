import styled from 'styled-components';

export const Container = styled.div`
  max-width: 720px;
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
    display: grid;
    max-width: 414px;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 20px;

    button {
      margin: 0 12.5px 8px 0;
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
    height: 52px;
  }

  .left-buttons {
    display: flex;

    button:first-child {
      margin-right: 25px;
    }
  }

  .add-to-cart-button {
    margin-right: 40px;
  }

  @media screen and (min-width: 435px) and (max-width: 586px) {
    .action-buttons {
      flex-direction: column;
    }
    .add-to-cart-button {
      margin-right: 0;
      margin-top: 16px;
    }
    .left-buttons {
      justify-content: space-between;

      button:nth-child(n) {
        width: 170px;
      }

      button:first-child {
        margin-right: 0;
      }
    }
  }

  @media screen and (max-width: 434px) {
    .filter-by-game-name {
      grid-template-columns: repeat(1, 1fr);
      max-width: 138px;
    }
    text-align: center;

    .smaller {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .choose-game {
      text-align: center;
    }

    .action-buttons {
      flex-direction: column;
    }
    .add-to-cart-button {
      margin-right: 0;
      margin-top: 16px;
    }
    .left-buttons {
      justify-content: space-between;

      button:nth-child(n) {
        width: 170px;
      }

      button:first-child {
        margin-right: 0;
      }
    }
  }
`;
