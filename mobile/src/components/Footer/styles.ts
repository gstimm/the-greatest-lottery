import styled from 'styled-components/native';
import colors from '../../utils/colors'

export const Container = styled.View`
  width: 100%;
  align-items: center;
  position: relative;
  bottom: 0;
`;

export const FooterText = styled.Text`
  font-size: 15px;
  color: ${colors.titleGray};
`;
