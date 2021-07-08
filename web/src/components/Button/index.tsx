import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'submit';
  color: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Button: React.FC<ButtonProps> = ({
  icon: Icon,
  color,
  children,
  ...rest
}) => {
  return (
    <StyledButton color={color} {...rest}>
      {Icon && Icon.name === 'FiArrowLeft' && <Icon size={24} />}
      {children}
      {Icon && Icon.name === 'FiArrowRight' && <Icon size={24} />}
    </StyledButton>
  );
};

export default Button;
