import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { StyledButton, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  type: 'button';
  gameType: string;
  color: string;
  margin?: string;
  borderColor: string;
  backgroundColor: string;
}

const GameButton: React.FC<ButtonProps> = ({
  color,
  gameType,
  margin,
  borderColor,
  backgroundColor,
  ...rest
}) => {
  return (
    <StyledButton
      color={color}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      margin={margin}
      {...rest}
    >
      <ButtonText color={color} backgroundColor={backgroundColor}>
        {gameType}
      </ButtonText>
    </StyledButton>
  );
};

export default GameButton;
