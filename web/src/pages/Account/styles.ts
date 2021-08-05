import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh - 79.5px);
  max-width: 1040px;
  margin: 0 auto;
  flex-wrap: wrap;

  @media screen and (max-width: 1040px) {
    padding: 0 10px;
  }
`;
