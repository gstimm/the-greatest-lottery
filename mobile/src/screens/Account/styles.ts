import styled from 'styled-components/native';
import colors from '../../utils/colors'

export const ScrollView = styled.ScrollView``;

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${colors.titleGray};
  font-size: 35px;
  font-weight: bold;
  font-style: italic;
  margin-top: 46px;
  margin-bottom: 26px;
`;

export const EditTitle = styled.Text`
  text-align: center;
  color: ${colors.lightGreen};
  font-size: 28px;
  font-weight: bold;
  font-style: italic;
  margin-top: 20px;
`;
