import styled from 'styled-components/native';
import colors from '../../utils/colors'

export const Container = styled.View`
  align-items: flex-start;
  justify-content: center;
  padding: 0 20px;
  position: relative;
  background-color: #F7F7F7F0;
`;

export const TitleAndFiltersView = styled.View`
  padding: 0 20px;
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  background-color: #F7F7F7F0;
`;

export const Title = styled.Text`
  color: ${colors.titleGray};
  font-size: 22px;
  font-weight: bold;
  font-style: italic;
  margin-top: 26px;
  margin-bottom: 15px;
`;

export const FilterText = styled.Text`
  color: ${colors.textGray};
  font-size: 17px;
  font-style: italic;
  margin-bottom: 15px;
`;

export const FiltersView = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 26px;

`;

export const CardsView = styled.View`
  width: 100%;
`;

export const NoItemsText = styled.Text`
  color: ${colors.textGray};
  font-size: 17px;
  font-style: italic;
  margin-top: 161px;
`;
