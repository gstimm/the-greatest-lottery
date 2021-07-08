import styled from 'styled-components';

interface IButtonProps {
  color: string;
}

export const StyledButton = styled.button<IButtonProps>`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font: italic normal bold 35px/70px Helvetica Neue;
  background-color: transparent;
  border: none;
  max-width: 128px;
  width: 100%;
  height: 42px;
  cursor: pointer;
  color: ${props => props.color};
`;
