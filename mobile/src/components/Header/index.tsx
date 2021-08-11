import React from 'react';
import { TouchableOpacity } from 'react-native';
import SmallLogo from '../SmallLogo';
import { Container } from './styles';
import colors from '../../utils/colors';
import { MaterialIcons } from '@expo/vector-icons';

export default function index() {
  return (
    <Container>
      <SmallLogo />
      <TouchableOpacity
        onPress={() => alert('out')}
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
