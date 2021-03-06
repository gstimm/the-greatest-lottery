import styled from 'styled-components/native';
import colors from '../../utils/colors'

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  position: relative;
  background-color: #F7F7F7C8;
`;

export const TitleAndFiltersView = styled.View`
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  background-color: #F7F7F7C8;
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

export const LoaderView = styled.View`
  width: 100%;
  height: 60px;
  bottom: 140px;
  background-color: ${colors.backgroundColor};
`;

export const EndText = styled.Text`
  color: ${colors.textGray};
  font-size: 17px;
  font-style: italic;
  text-align: center;
`;
