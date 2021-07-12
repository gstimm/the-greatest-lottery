import React, { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  gameType?: string;
  backgroundColor?: string;
}

const NumberButton: React.FC<ButtonProps> = ({
  color,
  gameType,
  backgroundColor,
  ...rest
}) => {
  return (
    <StyledButton color={color} backgroundColor={backgroundColor} {...rest}>
      10
    </StyledButton>
  );
};

export default NumberButton;
