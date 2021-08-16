import React from 'react';
import { TouchableOpacityProps } from 'react-native'
import { Button, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  color?: string;
  title?: string;
  iconSide?: 'left' | 'right';
}

const index: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props}>
      {props.iconSide && props.iconSide === 'left' &&
        <ButtonText style={{ marginRight: 17 }}>
          {props.children}
        </ButtonText>
      }
      <ButtonText color={props.color}>
        {props.title}
      </ButtonText>
      {props.iconSide && props.iconSide === 'right' &&
        <ButtonText style={{ marginLeft: 17 }}>
          {props.children}
        </ButtonText>
      }
    </Button>
  )
}

export default index;
