import React from 'react';
import { TouchableOpacity } from 'react-native';
import SmallLogo from '../SmallLogo';
import { Container, ButtonsView } from './styles';
import colors from '../../utils/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/ducks/auth';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { TabList } from '../../routes/AuthRoutes';
import { StackNavigationProp } from '@react-navigation/stack';

export type HeaderNavigationProp = StackNavigationProp<TabList, 'Home'>

interface HeaderProps {
  isEmptyCart?: boolean;
  isNewBetPage: boolean;
}

const Header: React.FC<HeaderProps> = ({ isEmptyCart, isNewBetPage }) => {
  const reduxDispatch = useDispatch();
  const { navigate, dispatch } = useNavigation<HeaderNavigationProp>()

  const handleLogout = () => {
    reduxDispatch(logout());
  };

  return (
    <Container>
      <TouchableOpacity onPress={() => navigate('Home')}>
        <SmallLogo />
      </TouchableOpacity>
      <ButtonsView>
        {isNewBetPage && !isEmptyCart && (
          <TouchableOpacity
            style={{ marginTop: 12, marginRight: 30 }}
            onPress={() => dispatch(DrawerActions.toggleDrawer())}
          >
            <MaterialCommunityIcons
              name='cart-outline'
              size={30}
              color='#B5C401'
            />
          </TouchableOpacity>)}
        <TouchableOpacity
          onPress={handleLogout}
          style={{ marginTop: 10 }}
        >
          <MaterialIcons
            name="logout"
            size={32}
            color={colors.iconsGray}
          />
        </TouchableOpacity>
      </ButtonsView>
    </Container>
  )
}

export default Header;
