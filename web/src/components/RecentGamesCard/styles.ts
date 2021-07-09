import styled from 'styled-components';

export const Container = styled.div`
  width: 438px;
  height: 94px;
  background-color: #ccc;

  margin-bottom: 30px;

  display: flex;
  flex-direction: row;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    color: #868686;
    font-size: 20px;
  }

  span {
    color: #868686;
    font-size: 17px;
  }
`;

export const Border = styled.div`
  height: 94px;
  width: 6px;
  background-color: #f00;
  border-radius: 3px;
  margin-right: 15px;
`;
