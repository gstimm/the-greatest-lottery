import styled from 'styled-components';

interface BorderProps {
  backgroundColor: string;
}

export const Container = styled.div`
  max-width: 450px;
  height: 94px;

  margin-bottom: 30px;

  display: flex;
  flex-direction: row;

  @media screen and (max-width: 450px) {
    width: 100%;
  }
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

export const Border = styled.div<BorderProps>`
  height: 94px;
  width: 6px;
  background-color: ${props => props.backgroundColor};
  border-radius: 3px;
  margin-right: 15px;
`;
