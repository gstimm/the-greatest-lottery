import styled from 'styled-components/native';
import colors from '../../utils/colors'

export const Container = styled.View`
  width: 100%;
  height: 17px;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 0;
`;

export const FooterText = styled.Text`
  font-size: 15px;
  line-height: 17px;
  color: ${colors.titleGray};
`;
