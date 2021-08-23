import styled from 'styled-components/native';
import colors from '../../utils/colors'

export const LogoContainer = styled.View`
  width: 75px;
  height: 45px;
  align-items: center;
`;

export const LogoText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  font-style: italic;
  color: ${colors.titleGray};
`;

export const GreenBar = styled.View`
  width: 75px;
  height: 6px;
  background-color: ${colors.lightGreen};
  border-radius: 3px;
`;
