import styled from 'styled-components';

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;

  @media screen and (max-width: 732px) {
    &:first-child {
      margin-top: 48px;
    }
    & {
      margin-bottom: 24px;
    }
    h1 {
      font-size: 54px;
    }
    h2 {
      font-size: 48px;
    }
    p {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 732px) {
    h1 {
      font-size: 83px;
    }
    h2 {
      font-size: 65px;
    }
    p {
      font-size: 22px;
    }
  }

  h1 {
    font-style: italic;
    font-weight: bold;
    color: #707070;
  }

  h2 {
    font-style: italic;
    font-weight: bold;
    color: #707070;
  }

  p {
    width: 128px;
    height: 40px;
    background: #b5c401;
    border-radius: 100px;
    font-style: italic;
    font-weight: bold;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
  }
`;
