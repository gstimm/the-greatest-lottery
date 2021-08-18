import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 76px;
`;

export const JustifyContainer = styled.View`
  justify-content: space-between;
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
`;

export const SplashContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 10;
  position: absolute;
`;
