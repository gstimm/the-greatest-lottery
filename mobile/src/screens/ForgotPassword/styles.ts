import styled from 'styled-components/native';
import colors from '../../utils/colors'

export const ScrollView = styled.ScrollView``;

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 76px;
`;

export const Title = styled.Text`
  color: ${colors.titleGray};
  font-size: 35px;
  font-weight: bold;
  font-style: italic;
  margin-top: 46px;
  margin-bottom: 26px;
`;
