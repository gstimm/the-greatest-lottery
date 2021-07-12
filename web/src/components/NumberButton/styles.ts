import styled from 'styled-components';

interface IButtonProps {
  backgroundColor?: string;
}

export const StyledButton = styled.button<IButtonProps>`
  height: 63px;
  width: 63px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font: normal normal bold 20px sans-serif;
  border-radius: 32px;
  background-color: #adc0c4;
  border: none;
  margin: 0 12px 20px 0;
  cursor: pointer;
  font-size: 20px;
  color: #fff;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
