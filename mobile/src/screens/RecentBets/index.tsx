import React from 'react';
import 'react-native-gesture-handler';
import { AuthStackList } from '../../routes/AuthRoutes';
import { StackNavigationProp } from '@react-navigation/stack';
import { Header, Footer } from '../../components/index';
import { Container, Title } from './styles';
import colors from '../../utils/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type RecentBetsNavigationProp = StackNavigationProp<AuthStackList, 'RecentBets'>

interface NavProps {
  navigation: RecentBetsNavigationProp;
}

const RecentBetsScreen: React.FC<NavProps> = ({ navigation }) => {
  return (
    <>
      <Container>
        <Header />
        <Title>Recent Bets</Title>

      </Container>
      <Footer />
    </>
  );
};

export default RecentBetsScreen;
