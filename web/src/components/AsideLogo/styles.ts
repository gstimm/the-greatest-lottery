import styled from 'styled-components';

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;

  h1 {
    width: 380px;
    height: 100px;
    text-align: center;
    font: italic normal bold 83px sans-serif;
    color: #707070;
  }

  h2 {
    text-align: center;
    font: italic normal bold 65px sans-serif;
    color: #707070;
  }

  p {
    width: 128px;
    height: 40px;
    background: #b5c401;
    border-radius: 100px;
    font: italic normal bold 22px sans-serif;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
  }
`;
