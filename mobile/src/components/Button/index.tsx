import React from 'react';
import { Button, ButtonText } from './styles';

interface ButtonProps {
  color?: string;
}

const index: React.FC<ButtonProps> = ({ children, color }) => {
  return (
    <Button>
      <ButtonText color={color}>{children}</ButtonText>
    </Button>
  )
}

export default index;
