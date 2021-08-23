import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const Container = styled.View`
  max-width: 335px;
  height: 79px;
  flex-direction: row;
  padding: 4px 0 3px 0;
`;

export const MainContent = styled.View`
  justify-content: space-between;
`;

export const NumbersAndInfoText = styled.Text`
  color: ${colors.textGray};
  font-size: 12px;
  font-style: italic;
`;

export const GameNameText = styled.Text`
  font-size: 16px;
  font-style: italic;
  font-weight: bold;
`;


export const Border = styled.View`
  height: 79px;
  width: 6px;
  border-radius: 3px;
  margin-right: 15px;
`;
