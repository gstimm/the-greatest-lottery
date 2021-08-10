import React from 'react';
import 'react-native-gesture-handler';
import { UnAuthStackList } from '../../routes/UnAuthRoutes';
import { StackNavigationProp } from '@react-navigation/stack';
import { Logo, Input, Card, Button, Footer } from '../../components/index';
import { Container, Title } from './styles';
import colors from '../../utils/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type LoginScreenNavigationProp = StackNavigationProp<UnAuthStackList, 'SignUp'>

interface NavProps {
  navigation: LoginScreenNavigationProp;
}

const SignUpScreen: React.FC<NavProps> = ({ navigation }) => {
  return (
    <>
      <Container>
        <Logo />
        <Title>Registration</Title>
        <Card>
          <Input type='text' label='Name' value={''} onChangeText={() => console.log('dsad')} />
          <Input type='email' label='Email' value={''} onChangeText={() => console.log('dsad')} />
          <Input type='password' label='Password' value={''} onChangeText={() => console.log('dsad')} />
          <Button
            color={colors.lightGreen}
            title="Register"
            iconSide="right"
            style={{ marginTop: 21, marginBottom: 30 }}
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
          title="Back"
          iconSide="left"
          style={{ marginTop: 38, marginBottom: 20 }}
          onPress={() => navigation.goBack()}
        >
          <MaterialCommunityIcons
            name="arrow-left"
            size={30}
            color={colors.titleGray}
          />
        </Button>
      </Container>
      <Footer />
    </>
  );
};

export default SignUpScreen;
