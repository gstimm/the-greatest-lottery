import styled from 'styled-components/native';
import colors from '../../utils/colors'

export const LogoContainer = styled.View`
  width: 107px;
  height: 64px;
  align-items: center;
`;

export const LogoText = styled.Text`
  font-size: 44px;
  font-weight: bold;
  font-style: italic;
  color: ${colors.titleGray};
`;

export const GreenBar = styled.View`
  width: 107px;
  height: 7px;
  background-color: ${colors.lightGreen};
  border-radius: 3px;
`;
