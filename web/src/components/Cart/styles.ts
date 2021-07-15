import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: auto;

  color: #707070;

  h1 {
    margin: 32px 0 19px 19px;
    font-size: 24px;
  }

  h2 {
    font-weight: normal;
    margin: 8px 0 47px 19px;
    font-size: 24px;
  }

  .button-container {
    width: 100%;
    height: 96px;
    background-color: #f4f4f4;
    border: 1px solid #e2e2e2;
    border-radius: 0 0 10px 10px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
