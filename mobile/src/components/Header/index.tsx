import React from 'react';
import { TouchableOpacity } from 'react-native';
import SmallLogo from '../SmallLogo';
import { Container } from './styles';
import colors from '../../utils/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/ducks/auth';

export default function index() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Container>
      <SmallLogo />
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
    </Container>
  )
}
