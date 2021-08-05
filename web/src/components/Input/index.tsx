import React, { forwardRef } from 'react';

import { StyledInput } from './styles';

type IProps = {
  type: string;
  placeholder: string;
  borderBottom?: string;
};

const Input = forwardRef<HTMLInputElement, IProps>((props, ref) => (
  <StyledInput ref={ref} {...props} />
));

export default Input;
