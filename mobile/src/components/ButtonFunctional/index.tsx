import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyledButton, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  type: 'button';
  color: string;
  margin?: string;
  borderColor: string;
  backgroundColor: string;
  isCartButton?: boolean;
  fontSize: string;
}

const ButtonFunctional: React.FC<ButtonProps> = ({
  color,
  margin,
  borderColor,
  backgroundColor,
  isCartButton,
  children,
  fontSize,
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
      {isCartButton &&
        <MaterialCommunityIcons
          name='cart-outline'
          size={22}
          color='#fff'
          style={{ marginRight: 10 }}
        />
      }
      <ButtonText
        fontSize={fontSize}
        color={color}
        backgroundColor={backgroundColor}
      >
        {children}
      </ButtonText>
    </StyledButton>
  );
};

export default ButtonFunctional;
