import styled from 'styled-components/native';
import colors from '../../utils/colors'

interface ButtonProps {
  color?: string;
}

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ButtonText = styled.Text<ButtonProps>`
  font-size: 30px;
  font-weight: bold;
  font-style: italic;
  color: ${({ color }) => color || colors.titleGray};
`
