import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  max-width: 1106px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 1fr;
`;

export const RightSideDiv = styled.div`
  div {
    display: flex;
    justify-content: center;
  }
`;
