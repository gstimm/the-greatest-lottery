import React from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import {
  Container,
  Title,
  CartHeader,
  CardsView,
  CartTitleText,
  CartTotalView,
  ButtonView,
  TotalValue,
  LeftSideView,
  CartText,
  TotalText,
  NoBetsText
} from './styles';
import { FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../utils/colors';
import CartGamesCard from '../CartGamesCard';
import Button from '../Button';
import { ApplicationStore } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { CartState } from '../../store/ducks/cart';
import { formatPrice } from '../../utils/formatData';
import { DrawerActions } from '@react-navigation/native';
import { addBetRequest, BetState, getBetRequest } from '../../store/ducks/bet';
import Toast from 'react-native-toast-message';

const Cart: React.FC<DrawerContentComponentProps> = ({ navigation }) => {
  const { cartBets, totalBetValue } = useSelector<ApplicationStore, CartState>(
    state => state.Cart
  );

  const dispatch = useDispatch();

  const saveBetHandler = () => {
    if (totalBetValue < 30) {
      Toast.show({
        type: 'warning',
        text1: 'Failed',
        text2: 'The minimum value for a bet is R$ 30,00.',
        topOffset: 50,
        bottomOffset: 50,
        position: 'top',
      });
      return;
    }

    const bets = cartBets.map(bet => {
      return {
        game_id: bet.id,
        numbers: bet.numbers,
      };
    });

    dispatch(addBetRequest(bets));

    navigation.closeDrawer();
    navigation.navigate('Home');
  };

  return (
    <>
      <Container>
        <CartHeader>
          <CartTitleText>
            <MaterialCommunityIcons
              name='cart-outline'
              size={30}
              color='#B5C401'
            />
            <Title>CART</Title>
          </CartTitleText>
          <TouchableOpacity
            style={{ marginTop: -10 }}
            onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
          >
            <MaterialCommunityIcons
              name="close-thick"
              size={28}
              color={colors.lightGreen}
            />
          </TouchableOpacity>
        </CartHeader>
        <CardsView>
          {cartBets.length === 0 &&
            <NoBetsText>
              Your cart is empty! Add a new Bet and test your lucky!
            </NoBetsText>
          }
          {cartBets.length > 0 && (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={cartBets}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <CartGamesCard
                  key={item.id + '-' + index}
                  bet={item}
                  index={index}
                  length={cartBets.length}
                />
              )}
            />
          )}
        </CardsView>
        {cartBets.length > 0 && (
          <CartTotalView>
            <LeftSideView>
              <CartText>CART </CartText>
              <TotalText>TOTAL:</TotalText>
            </LeftSideView>
            <TotalValue>{formatPrice(totalBetValue)}</TotalValue>
          </CartTotalView>
        )}
      </Container>
      {cartBets.length > 0 && (
        <ButtonView>
          <Button
            title="Save"
            color={colors.lightGreen}
            iconSide="right"
            onPress={saveBetHandler}
          >
            <MaterialCommunityIcons
              name="arrow-right"
              size={30}
              color={colors.lightGreen}
            />
          </Button>
        </ButtonView>
      )}
    </>
  )
}

export default Cart;
