import styled from 'styled-components/native';
import colors from '../../utils/colors'

export const Container = styled.View`
  width: 100%;
  height: 61px;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: auto;
`;

export const FooterText = styled.Text`
  font-size: 15px;
  color: ${colors.titleGray};
`;
