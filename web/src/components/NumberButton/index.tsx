import React, { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
}

const NumberButton: React.FC<ButtonProps> = ({
  children,
  color,
  backgroundColor,
  ...rest
}) => {
  return (
    <StyledButton color={color} backgroundColor={backgroundColor} {...rest}>
      {children}
    </StyledButton>
  );
};

export default NumberButton;
