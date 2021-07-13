import React, { forwardRef } from 'react';

import { StyledInput } from './styles';

type IProps = {
  type: string;
  placeholder: string;
  required: boolean;
  minLength?: number;
};

const Input = forwardRef<HTMLInputElement, IProps>((props, ref) => (
  <StyledInput ref={ref} {...props} />
));

export default Input;
