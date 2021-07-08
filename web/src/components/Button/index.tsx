import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color: string;
  icon?: React.ComponentType<IconBaseProps>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  icon: Icon,
  color,
  text,
  onClick,
  ...rest
}) => {
  return (
    <StyledButton color={color} onClick={onClick} {...rest}>
      {Icon && Icon.name === 'FiArrowLeft' && <Icon size={24} />}
      {text}
      {Icon && Icon.name === 'FiArrowRight' && <Icon size={24} />}
    </StyledButton>
  );
};

export default Button;
