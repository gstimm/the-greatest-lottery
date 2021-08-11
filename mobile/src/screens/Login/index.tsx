import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { UnAuthStackList } from '../../routes/UnAuthRoutes';
import { StackNavigationProp } from '@react-navigation/stack';
import { Logo, Input, Card, Button, Footer } from '../../components/index';
import { Container, Title, ForgotText, ForgotButton } from './styles';
import colors from '../../utils/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { AuthState, loginRequest } from '../../store/ducks/auth';
import { ApplicationStore } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { SignInSchema } from '../../utils/schemas';

type LoginScreenNavigationProp = StackNavigationProp<UnAuthStackList, 'Login'>

interface NavProps {
  navigation: LoginScreenNavigationProp;
}

interface LoginForm {
  email: string;
  password: string;
}

const LoginScreen: React.FC<NavProps> = ({ navigation }) => {
  const { error } = useSelector<ApplicationStore, AuthState>(
    state => state.Auth,
  );

  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    register,
    formState: { errors }
  } = useForm<LoginForm>({ resolver: yupResolver(SignInSchema) })

  useEffect(() => {
    register('email')
    register('password')
  }, [register])

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);


  const onSubmit: SubmitHandler<LoginForm> = data => {
    dispatch(loginRequest(data.email, data.password))
  }

  return (
    <>
      <Container>
        <Logo />
        <Title>Authentication</Title>
        <Card>
          <Controller
            control={control}
            name='email'
            defaultValue=''
            render={({ field: { onChange, value} }) => (
              <Input
                type='email'
                label='Email'
                value={value}
                onChangeText={onChange}
                error={errors.email?.message}
              />
            )}
          />
          <Controller
            control={control}
            name='password'
            defaultValue=''
            render={({ field: { onChange, value} }) => (
              <Input
                type='password'
                label='Password'
                value={value}
                onChangeText={onChange}
                error={errors.password?.message}
              />
            )}
          />
          <ForgotButton onPress={() => navigation.push('ForgotPassword')}>
            <ForgotText>I forget my password</ForgotText>
          </ForgotButton>
          <Button
            color={colors.lightGreen}
            title="Log In"
            iconSide="right"
            style={{ marginTop: 45, marginBottom: 33 }}
            onPress={handleSubmit(onSubmit)}
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
