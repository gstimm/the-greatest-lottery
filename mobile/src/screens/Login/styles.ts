import styled from 'styled-components/native';
import colors from '../../utils/colors'

export const ForgotButton = styled.TouchableOpacity``;

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

export const ForgotText = styled.Text`
  color: ${colors.iconsGray};
  font-size: 14px;
  font-style: italic;
  text-align: right;
  padding: 24px 31px 0 0;
  margin-bottom: 7px;
`;

export const ButtonView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 38px 0 33px 0;
`;
