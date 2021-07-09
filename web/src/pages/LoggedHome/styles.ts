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
  background-color: #ff0;

  h1 {
    margin: 74px 45px 38px 0;
    color: #707070;
    font-size: 24px;
  }
`;

export const NewGameDiv = styled.div`
  height: 100%;
  width: 100%;
  background-color: #f0f;

  button {
    margin-top: 74px;
    width: 50%;
    justify-self: right;
  }
`;
