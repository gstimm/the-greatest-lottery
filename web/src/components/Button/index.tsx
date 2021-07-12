import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'submit' | 'button';
  color: string;
  fontSize: string;
  margin?: string;
  padding?: string;
  border?: string;
  borderRadius?: string;
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
      {Icon &&
        (Icon.name === 'FiArrowLeft' || Icon.name === 'FiShoppingCart') && (
          <Icon size={24} style={{ marginRight: '10px' }} />
        )}
      {children}
      {Icon && Icon.name === 'FiArrowRight' && (
        <Icon size={24} style={{ marginLeft: '10px' }} />
      )}
    </StyledButton>
  );
};

export default Button;
