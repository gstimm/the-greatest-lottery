import styled from 'styled-components';

interface IProps {
  width: string;
  margin?: string;
}

export const StyledCard = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: fit-content;
  width: ${props => props.width};
  margin: ${props => props.margin};
  min-height: 100px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 16px;
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.14);
`;
