import React, { forwardRef } from 'react';

type PropsInput = {
  label: string;
};

const Input = forwardRef<HTMLInputElement, PropsInput>((props, ref) => (
  <>
    <label htmlFor="input">{props.label}</label>
    <input type="text" ref={ref} id="input" />
  </>
));

export default Input;
