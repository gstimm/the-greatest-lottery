import styled from 'styled-components';

export const Container = styled.div`
  min-height: 60px;

  margin-bottom: 32px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 234px;

  h3 {
    color: #868686;
    font-size: 15px;
    word-break: break-all;
    margin: 3px 0;
  }
`;

export const Border = styled.div`
  min-height: 60px;
  height: 100%;
  width: 4px;
  background-color: #f00;
  border-radius: 3px 0 0 3px;
  margin: 0 12px;
`;
