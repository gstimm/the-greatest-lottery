import styled from 'styled-components';

interface IButtonProps {
  color: string;
  margin?: string;
  border: string;
  backgroundColor: string;
}

export const StyledButton = styled.button<IButtonProps>`
  height: 34px;
  width: 113px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font: italic normal bold 35px sans-serif;
  border-radius: 17px;
  background-color: ${props => props.backgroundColor};
  border: 2px solid ${props => props.border};
  margin: ${props => props.margin};
  cursor: pointer;
  font-size: 14px;
  color: ${props => props.color};

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
