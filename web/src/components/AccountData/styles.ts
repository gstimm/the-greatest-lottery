import styled from 'styled-components';

export const Container = styled.div`
  color: #707070;
  margin-bottom: 48px;

  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 355px;

  h1 {
    margin: 73.5px 0 32px 0;
  }

  h2 {
    font-size: 22px;
    margin-bottom: 10px;
    color: #b5c401;
  }
`;

export const FormStyle = styled.div`
  width: 100%;

  .error {
    color: #f22;
    font-size: 14px;
    font-style: normal;
    text-align: left;
    margin: 5px 0 0 30px;
  }
`;
