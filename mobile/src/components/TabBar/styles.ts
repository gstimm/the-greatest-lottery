import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  height: 72px;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

export const TabView = styled.TouchableOpacity`
  width: 52px;
  align-items: center;
  justify-content: flex-end;
`;

export const TabLabel = styled.Text`
  font-size: 14px;
  font-style: italic;
  margin-top: 2px;
  margin-bottom: 11px;
`;

export const SelectedBar = styled.View`
  width: 30px;
  height: 4px;
  border-radius: 2px;
  background-color: ${colors.lightGreen};
  margin-bottom: 5px;
`;

export const NewBetIcon = styled.Image`
  width: 50px;
  height: 50px;
`;

export const NewBetView = styled.View`
  width: 92px;
  height: 92px;
  align-items: center;
  justify-content: center;
  border-radius: 46px;
  background-color: ${colors.lightGreen};
  border: 4px solid #fff;
  margin-bottom: 10px;
`;
