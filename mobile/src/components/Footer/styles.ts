import styled from 'styled-components/native';
import colors from '../../utils/colors'

export const Container = styled.View`
  width: 100%;
  height: 39px;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  margin: auto;
  margin-bottom: 22px;
`;

export const FooterText = styled.Text`
  font-size: 15px;
  color: ${colors.titleGray};
`;
