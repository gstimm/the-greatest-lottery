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
}

export const StyledButton = styled.TouchableOpacity<ButtonProps>`
  height: 30px;
  min-width: 101px;
  width: auto;
  text-align: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: ${props => props.backgroundColor};
  border: 2px solid ${props => props.borderColor};
  margin: ${props => props.margin};
  font-size: 14px;
`;

export const ButtonText = styled.Text<TextProps>`
  font: italic normal bold 14px sans-serif;
  color: ${props => props.color};
`;
