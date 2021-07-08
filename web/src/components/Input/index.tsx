import React, { forwardRef } from 'react';

import { StyledInput } from './styles';

type PropsInput = {
  type: string;
  placeholder: string;
  required: boolean;
  minLength?: number;
};

const Input = forwardRef<HTMLInputElement, PropsInput>((props, ref) => (
  <StyledInput ref={ref} {...props} />
));

export default Input;
