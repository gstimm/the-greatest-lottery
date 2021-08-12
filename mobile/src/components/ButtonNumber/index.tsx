import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { StyledButton, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  backgroundColor?: string;
  color?: string;
}

const ButtonNumber: React.FC<ButtonProps> = ({
  children,
  color,
  backgroundColor,
  ...rest
}) => {
  return (
    <StyledButton color={color} backgroundColor={backgroundColor} {...rest}>
      <ButtonText>{children}</ButtonText>
    </StyledButton>
  );
};

export default ButtonNumber;
