import styled from 'styled-components/native';

interface IButtonProps {
  backgroundColor?: string;
  color?: string;
}

export const StyledButton = styled.TouchableOpacity<IButtonProps>`
  height: 59px;
  width: 59px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: #adc0c4;
  border: none;
`;

export const ButtonText = styled.Text`
  font: normal normal bold 20px sans-serif;
  color: #fff;
  font-size: 18px;
  line-height: 22px;
`;
