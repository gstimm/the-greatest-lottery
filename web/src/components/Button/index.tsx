import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'submit' | 'button';
  color: string;
  fontSize: string;
  margin?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Button: React.FC<ButtonProps> = ({
  icon: Icon,
  color,
  fontSize,
  children,
  margin,
  ...rest
}) => {
  return (
    <StyledButton color={color} fontSize={fontSize} margin={margin} {...rest}>
      {Icon && Icon.name === 'FiArrowLeft' && <Icon size={24} />}
      {children}
      {Icon && Icon.name === 'FiArrowRight' && <Icon size={24} />}
    </StyledButton>
  );
};

export default Button;
