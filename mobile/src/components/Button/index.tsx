import React from 'react';
import {TouchableOpacityProps} from 'react-native'
import { Button, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  color?: string;
}

const index: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props}>
      <ButtonText color={props.color}>{props.children}</ButtonText>
    </Button>
  )
}

export default index;
