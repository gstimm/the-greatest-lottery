import styled from 'styled-components';

interface IButtonProps {
  color: string;
  fontSize: string;
  margin?: string;
  border?: string;
  padding?: string;
  borderRadius?: string;
  backgroundColor?: string;
}

export const StyledButton = styled.button<IButtonProps>`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font: italic normal bold 35px sans-serif;
  background-color: ${props => props.backgroundColor || 'transparent'};
  border: ${props => props.border || 'none'};
  border-radius: ${props => props.borderRadius || '0'};
  padding: ${props => props.padding || 0};
  min-width: 100px;
  margin: ${props => props.margin};
  cursor: pointer;
  font-size: ${props => props.fontSize};
  color: ${props => props.color};

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
