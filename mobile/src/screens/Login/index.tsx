import React from 'react';
import { Logo, Input, Card, Button, Footer } from '../../components/index';
import { Container, Title, ForgotText, ButtonView, ScrollView } from './styles';
import colors from '../../utils/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LoginScreen: React.FC = () => {
  return (
    <>
      <Container>
        <Logo />
        <Title>Authentication</Title>
        <Card>
          <Input type='email' label='Email' value={''} onChangeText={() => console.log('dsad')} />
          <Input type='password' label='Password' value={''} onChangeText={() => console.log('dsad')} />
          <ForgotText>I forget my password</ForgotText>
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
          <Button>
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
