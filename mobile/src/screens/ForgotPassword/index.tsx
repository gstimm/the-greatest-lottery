import React from 'react';
import 'react-native-gesture-handler';
import { UnAuthStackList } from '../../routes/UnAuthRoutes';
import { StackNavigationProp } from '@react-navigation/stack';
import { Logo, Input, Card, Button, Footer } from '../../components/index';
import { Container, Title } from './styles';
import colors from '../../utils/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type LoginScreenNavigationProp = StackNavigationProp<UnAuthStackList, 'ForgotPassword'>

interface NavProps {
  navigation: LoginScreenNavigationProp;
}

const ForgotPasswordScreen: React.FC<NavProps> = ({ navigation }) => {
  return (
    <>
      <Container>
        <Logo />
        <Title>Reset password</Title>
        <Card>
          <Input type='email' label='Email' value={''} onChangeText={() => console.log('dsad')} />
          <Button
            color={colors.lightGreen}
            title="Send link"
            iconSide="right"
            style={{ marginTop: 16, marginBottom: 20 }}
            onPress={() => navigation.push('Login')}
          >
            <MaterialCommunityIcons
              name="arrow-right"
              size={30}
              color={colors.lightGreen}
            />
          </Button>
        </Card>
        <Button
          onPress={() => navigation.goBack()}
          title="Back"
          iconSide="left"
          style={{ marginTop: 45, marginBottom: 20 }}
        >
          <MaterialCommunityIcons
            name="arrow-left"
            size={30}
            color={colors.titleGray}
          />
        </Button>
        <Button
          onPress={() => navigation.push('SignUp')}
          title="Sign Up"
          iconSide="right"
          style={{ marginTop: 45, marginBottom: 20 }}
        >
          <MaterialCommunityIcons
            name="arrow-right"
            size={30}
            color={colors.titleGray}
          />
        </Button>
      </Container>
      <Footer />
    </>
  );
};

export default ForgotPasswordScreen;
