import styled from 'styled-components/native';

interface ButtonProps {
  color: string;
  margin?: string;
  borderColor: string;
  backgroundColor: string;
}

interface TextProps {
  color: string;
  backgroundColor: string;
  fontSize: string;
}

export const StyledButton = styled.TouchableOpacity<ButtonProps>`
  height: 32px;
  width: auto;
  padding: 0 12px;
  text-align: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${props => props.backgroundColor};
  border: 1px solid ${props => props.borderColor};
  margin: ${props => props.margin};
`;

export const ButtonText = styled.Text<TextProps>`
  font-weight: bold;
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
`;
