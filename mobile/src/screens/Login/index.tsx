import React from 'react';
import 'react-native-gesture-handler';
import { UnAuthStackList } from '../../routes/UnAuthRoutes';
import { StackNavigationProp } from '@react-navigation/stack';
import { Logo, Input, Card, Button, Footer } from '../../components/index';
import { Container, Title, ForgotText, ButtonView, ForgotButton } from './styles';
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
          <ButtonView>
            <Button color={colors.lightGreen}>
              Log In
            </Button>
            <MaterialCommunityIcons
              name="arrow-right"
              size={30}
              color={colors.lightGreen}
              style={{ marginLeft: 17 }}
            />
          </ButtonView>
        </Card>
        <ButtonView>
          <Button onPress={() => navigation.push('SignUp')} >
            Sign Up
          </Button>
          <MaterialCommunityIcons
            name="arrow-right"
            size={30}
            color={colors.titleGray}
            style={{ marginLeft: 17 }}
          />
        </ButtonView>
      </Container>
      <Footer />
    </>
  );
};

export default LoginScreen;
