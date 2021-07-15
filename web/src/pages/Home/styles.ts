import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  max-width: 1106px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
`;

export const NewGameDiv = styled.div`
  div {
    display: flex;
    margin-top: 74px;
    justify-content: flex-end;
  }
`;
