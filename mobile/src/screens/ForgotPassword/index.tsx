import React from 'react';
import 'react-native-gesture-handler';
import { UnAuthStackList } from '../../routes/UnAuthRoutes';
import { StackNavigationProp } from '@react-navigation/stack';
import { Logo, Input, Card, Button, Footer } from '../../components/index';
import { Container, Title, SendLinkButtonView, AuxButtonView } from './styles';
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
          <SendLinkButtonView>
            <Button color={colors.lightGreen}>
              Send link
            </Button>
            <MaterialCommunityIcons
              name="arrow-right"
              size={30}
              color={colors.lightGreen}
              style={{ marginLeft: 17 }}
            />
          </SendLinkButtonView>
        </Card>
        <AuxButtonView>
          <MaterialCommunityIcons
            name="arrow-left"
            size={30}
            color={colors.titleGray}
            style={{ marginRight: 17 }}
          />
          <Button onPress={() => navigation.goBack()} >
            Back
          </Button>
        </AuxButtonView>
        <AuxButtonView>
          <Button onPress={() => navigation.push('SignUp')} >
            Sign Up
          </Button>
          <MaterialCommunityIcons
            name="arrow-right"
            size={30}
            color={colors.titleGray}
            style={{ marginLeft: 17 }}
          />
        </AuxButtonView>
      </Container>
      <Footer />
    </>
  );
};

export default ForgotPasswordScreen;
