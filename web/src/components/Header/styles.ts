import styled from 'styled-components';

export const HeaderDivContainer = styled.div`
  border-bottom: 2px solid #ebebeb;
  height: 76px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
`;

export const HeaderDiv = styled.header`
  width: 100%;
  max-width: 1106px;

  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .left-side {
    a {
      margin-left: 40px;
    }
  }

  .right-side {
    a {
      margin-left: 40px;
    }
  }
`;
