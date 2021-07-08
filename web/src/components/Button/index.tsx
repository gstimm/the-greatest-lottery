import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color: string;
  icon?: React.ComponentType<IconBaseProps>;
  clicked?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  icon: Icon,
  color,
  text,
  ...rest
}) => {
  return (
    <StyledButton color={color} {...rest}>
      {Icon && Icon.name === 'FiArrowLeft' && <Icon size={24} />}
      {text}
      {Icon && Icon.name === 'FiArrowRight' && <Icon size={24} />}
    </StyledButton>
  );
};

export default Button;
