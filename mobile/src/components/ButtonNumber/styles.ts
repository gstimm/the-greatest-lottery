import styled from 'styled-components/native';

interface ButtonProps {
  backgroundColor?: string;
  size: string;
}

interface TextProps {
  fontSize: string;
}

export const StyledButton = styled.TouchableOpacity<ButtonProps>`
  height: ${props => props.size};
  width: ${props => props.size};
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: ${props => props.backgroundColor};
  border: none;
`;

export const ButtonText = styled.Text<TextProps>`
  font-weight: bold;
  color: #fff;
  font-size: ${props => props.fontSize};
  line-height: 22px;
`;
