import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { StyledButton, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  backgroundColor?: string;
  size: string;
  fontSize: string;
  isSelected?: boolean;
}

const ButtonNumber: React.FC<ButtonProps> = ({
  children,
  backgroundColor,
  size,
  fontSize,
  isSelected,
  ...rest
}) => {
  return (
    <StyledButton size={size} backgroundColor={backgroundColor} {...rest}>
      {isSelected &&
        <Foundation
          name='x'
          size={8}
          color='#fff'
          style={{ marginBottom: -6, marginLeft: 16 }}
        />
      }
      <ButtonText fontSize={fontSize}>{children}</ButtonText>
    </StyledButton>
  );
};

export default ButtonNumber;
