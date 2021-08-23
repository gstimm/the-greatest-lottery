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
  margin-bottom: 24px;
`;

export const Title = styled.Text`
  color: ${colors.titleGray};
  font-size: 22px;
  font-weight: bold;
  font-style: italic;
  margin-top: 26px;
  margin-bottom: 15px;
  text-transform: uppercase;
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
`;

export const FillYourBetText = styled.Text`
  font-size: 17px;
  color: ${colors.textGray};
  font-weight: bold;
  font-style: italic;
  line-height: 24px;
`;

export const DescriptionText = styled.Text`
  font-size: 14px;
  color: ${colors.textGray};
  font-style: italic;
  line-height: 24px;
`;

export const PushView = styled.View`
  width: 36px;
  height: 6px;
  border-radius: 3px;
  background-color: ${colors.iconsGray};
  align-self: center;
  margin-bottom: 15px;
`;

export const NumbersView = styled.View`
  width: 100%;
`;

export const NoItemsText = styled.Text`
  color: ${colors.textGray};
  font-size: 17px;
  font-style: italic;
  margin-top: 161px;
`;

export const FunctionalButtonView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 14px;
  margin-bottom: 11px;
`;
