import styled from 'styled-components/native';
import colors from '../../utils/colors'

export const Container = styled.View`
  width: 80%;
  height: 80%;
  flex-direction: column;
  justify-content: flex-start;
  margin: 60px 28px 25px 28px;
  padding-bottom: 100px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  font-style: italic;
  color: ${colors.titleGray};
  margin-left: 6px;
`;

export const CartHeader = styled.View`
  flex-direction: row;
  width: 100%;
  margin-bottom: 25px;
  justify-content: space-between;
`;

export const CartTitleText = styled.View`
  flex-direction: row;
`;

export const CardsView = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
`;

export const CartTotalView = styled.View`
  flex-direction: row;
  width: 100%;
  padding-top: 10px;
  justify-content: space-between;
  bottom: 40px;
  position: absolute;
  background-color: #fff;
`;

export const LeftSideView = styled.View`
  flex-direction: row;
`;

export const CartText = styled.Text`
  font-size: 15px;
  color: ${colors.titleGray};
  font-weight: bold;
  font-style: italic;
`;

export const TotalText = styled.Text`
  font-size: 15px;
  color: ${colors.titleGray};
`;

export const TotalValue = styled.Text`
  font-size: 15px;
  color: ${colors.titleGray};
  font-weight: bold;
`;

export const ButtonView = styled.View`
  background-color: ${colors.buttonBackground};
  height: 94px;
  width: 100%;
  align-items: center;
  padding-top: 18px;
  bottom: 0;
  position: absolute;
`;

export const NoBetsText = styled.Text`
  color: ${colors.textGray};
  font-size: 16px;
  font-style: italic;
  text-align: center;
  margin-top: 250px;
`;
