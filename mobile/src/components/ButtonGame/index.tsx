import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { StyledButton, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  type: 'button';
  gameType: string;
  color: string;
  margin?: string;
  borderColor: string;
  backgroundColor: string;
  isSelected?: boolean;
}

const GameButton: React.FC<ButtonProps> = ({
  color,
  gameType,
  margin,
  borderColor,
  backgroundColor,
  isSelected,
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
      {isSelected &&
        <Foundation
          name='x'
          size={11}
          color='#fff'
          style={{ marginBottom: 7, marginLeft: 3 }}
        />
      }
    </StyledButton>
  );
};

export default GameButton;
