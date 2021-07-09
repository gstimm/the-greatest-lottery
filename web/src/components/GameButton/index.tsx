import React, { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'button';
  gameType: string;
  color: string;
  margin?: string;
  border: string;
  backgroundColor: string;
}

const GameButton: React.FC<ButtonProps> = ({
  color,
  gameType,
  margin,
  border,
  backgroundColor,
  ...rest
}) => {
  return (
    <StyledButton
      color={color}
      border={border}
      backgroundColor={backgroundColor}
      margin={margin}
      {...rest}
    >
      {gameType}
    </StyledButton>
  );
};

export default GameButton;
