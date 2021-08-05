import styled from 'styled-components';

interface BorderProps {
  backgroundColor: string;
}

export const Container = styled.div`
  margin: 16px 0;
  padding: 0 16px;
  display: flex;
  border-radius: 5px;

  .icon {
    margin: auto;
  }

  button {
    border: none;
    margin: auto;
    background-color: transparent;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  div {
    display: flex;
    align-items: center;

    h3 {
      margin-right: 14px;
    }

    p {
      font-size: 15px;
    }
  }

  h3 {
    color: #868686;
    font-size: 15px;
    word-break: break-all;
    margin: 3px 0;
  }
`;

export const Border = styled.div<BorderProps>`
  width: 4px;
  background-color: ${props => props.backgroundColor};
  border-radius: 3px 0 0 3px;
  margin: 0 12px;
`;
