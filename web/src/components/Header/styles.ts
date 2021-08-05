import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 2px solid #ebebeb;
  height: 76px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
`;

export const HeaderDiv = styled.header`
  width: 100%;
  max-width: 1040px;

  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    margin-left: 40px;
  }

  @media screen and (max-width: 554px) {
    .right-side {
      flex-direction: column;
      justify-content: space-evenly;
    }
    a {
      margin-left: 0;
    }
  }

  @media screen and (max-width: 1040px) {
    margin: 0 10px;
  }
`;
