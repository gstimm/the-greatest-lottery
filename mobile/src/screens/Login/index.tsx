import React from 'react';
import 'react-native-gesture-handler';
import { UnAuthStackList } from '../../routes/UnAuthRoutes';
import { StackNavigationProp } from '@react-navigation/stack';
import { Logo, Input, Card, Button, Footer } from '../../components/index';
import { Container, Title, ForgotText, ForgotButton } from './styles';
import colors from '../../utils/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type LoginScreenNavigationProp = StackNavigationProp<UnAuthStackList, 'Login'>

interface NavProps {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<NavProps> = ({ navigation }) => {
  return (
    <>
      <Container>
        <Logo />
        <Title>Authentication</Title>
        <Card>
          <Input type='email' label='Email' value={''} onChangeText={() => console.log('dsad')} />
          <Input type='password' label='Password' value={''} onChangeText={() => console.log('dsad')} />
          <ForgotButton onPress={() => navigation.push('ForgotPassword')}>
            <ForgotText>I forget my password</ForgotText>
          </ForgotButton>
          <Button
            color={colors.lightGreen}
            title="Log In"
            iconSide="right"
            style={{ marginTop: 45, marginBottom: 33 }}
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
          color={colors.titleGray}
          title="Sign Up"
          iconSide="right"
          style={{ marginTop: 45, marginBottom: 33 }}
          onPress={() => navigation.push('SignUp')}
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

export default LoginScreen;
