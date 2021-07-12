import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  max-width: 1106px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
`;

export const LeftSideDiv = styled.div`
  height: 100%;
  width: 100%;

  .recent-games-header {
    display: flex;
    flex-direction: column;
    height: 368px;
    justify-content: center;
  }

  h1 {
    font-weight: normal;
    color: #707070;
    font-size: 24px;
    margin-top: 74px;
    margin-bottom: 33px;
  }

  p {
    color: #868686;
    font-size: 17px;
    margin-bottom: 20px;
  }

  .filter-by-game-name {
    display: flex;

    button {
      margin: 0 25px 20px 0;
    }
  }

  .numbers-div {
    height: auto;
    width: 750px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
  }

  .aux-buttons {
    display: flex;
    justify-content: space-between;
    height: 52px;
    margin-top: 24px;
    margin-bottom: 50px;
  }

  .left-side {
    display: flex;

    button {
      margin-right: 25px;
    }
  }
`;

export const RightSideDiv = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: flex-end;
`;
