import styled from 'styled-components';

interface IInputProps {
  borderBottom?: string;
}

export const StyledInput = styled.input<IInputProps>`
  height: 80px;
  width: 100%;
  border: none;
  padding: 0 32px;
  font: italic bold 17px sans-serif;
  border-radius: 16px 16px 0 0;
  color: #707070;

  border-bottom: ${props => props.borderBottom || '2px solid #ebebeb'};

  ::placeholder {
    color: #9d9d9d;
  }
`;
