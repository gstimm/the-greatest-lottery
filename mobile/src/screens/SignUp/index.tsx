import React from 'react';
import 'react-native-gesture-handler';
import { UnAuthStackList } from '../../routes/UnAuthRoutes';
import { StackNavigationProp } from '@react-navigation/stack';
import { Logo, Input, Card, Button, Footer } from '../../components/index';
import { Container, Title, ButtonView } from './styles';
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
          <ButtonView>
            <Button color={colors.lightGreen}>
              Register
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
          <MaterialCommunityIcons
            name="arrow-left"
            size={30}
            color={colors.titleGray}
            style={{ marginRight: 17 }}
          />
          <Button onPress={() => navigation.goBack()}>
            Back
          </Button>
        </ButtonView>
      </Container>
      <Footer />
    </>
  );
};

export default SignUpScreen;
