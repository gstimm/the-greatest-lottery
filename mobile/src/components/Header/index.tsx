import React from 'react';
import { TouchableOpacity } from 'react-native';
import SmallLogo from '../SmallLogo';
import { Container, ButtonsView } from './styles';
import colors from '../../utils/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/ducks/auth';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TabList } from '../../routes/AuthRoutes';
import { StackNavigationProp } from '@react-navigation/stack';

type HeaderNavigationProp = StackNavigationProp<TabList, 'Home'>

interface HeaderProps {
  isEmptyCart?: boolean;
  isNewBetPage: boolean;
}

const Header: React.FC<HeaderProps> = ({ isEmptyCart, isNewBetPage }) => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation<HeaderNavigationProp>()

  const handleLogout = () => {
    dispatch(logout());
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
