import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { UnAuthStackList } from '../../routes/UnAuthRoutes';
import { StackNavigationProp } from '@react-navigation/stack';
import { Logo, Input, Card, Button, Footer } from '../../components/index';
import { Container, Title, JustifyContainer } from './styles';
import colors from '../../utils/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignUpSchema } from '../../utils/schemas';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { ApplicationStore } from '../../store';
import { AuthState } from '../../store/ducks/auth';
import api from '../../services/api';
import { ScrollView, Dimensions } from 'react-native';
import Toast from 'react-native-toast-message';

type LoginScreenNavigationProp = StackNavigationProp<UnAuthStackList, 'SignUp'>

interface NavProps {
  navigation: LoginScreenNavigationProp;
}

interface SignUpForm {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const SignUpScreen: React.FC<NavProps> = ({ navigation }) => {
  const { error } = useSelector<ApplicationStore, AuthState>(
    state => state.Auth,
  );

  const {
    handleSubmit,
    control,
    register,
    formState: { errors }
  } = useForm<SignUpForm>({ resolver: yupResolver(SignUpSchema) })

  useEffect(() => {
    register('name'),
      register('email')
    register('password')
    register('password_confirmation')
  }, [register])

  useEffect(() => {
    if (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error,
        topOffset: 50,
        bottomOffset: 50,
        position: 'top',
      })
    }
  }, [error]);


  const onSubmit: SubmitHandler<SignUpForm> = async data => {
    if (Object.keys(errors).length) {
      Toast.show({
        type: 'warning',
        text1: 'Failed',
        text2: 'Please fill all fields.',
        topOffset: 50,
        bottomOffset: 50,
        position: 'top',
      })
      return;
    }

    data.password_confirmation = data.password;

    try {
      await api.post('/users', data);
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'User created successfully.',
        topOffset: 50,
        bottomOffset: 50,
        position: 'top',
      })
      navigation.navigate('Login');
    } catch (error) {
      error.response.data.errors.map((err: { message: string }) =>
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: err.message,
          topOffset: 50,
          bottomOffset: 50,
          position: 'top',
        })
      );
    }
  }

  const windowHeight = Dimensions.get('window').height;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <JustifyContainer style={{ height: windowHeight }}>
        <Container>
          <Logo />
          <Title>Registration</Title>
          <Card>
            <Controller
              control={control}
              name='name'
              defaultValue=''
              render={({ field: { onChange, value } }) => (
                <Input
                  type='text'
                  label='Name'
                  value={value}
                  onChangeText={onChange}
                  error={errors.name?.message}
                />
              )}
            />
            <Controller
              control={control}
              name='email'
              defaultValue=''
              render={({ field: { onChange, value } }) => (
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
              render={({ field: { onChange, value } }) => (
                <Input
                  type='password'
                  label='Password'
                  value={value}
                  onChangeText={onChange}
                  error={errors.password?.message}
                />
              )}
            />
            <Button
              color={colors.lightGreen}
              title="Register"
              iconSide="right"
              style={{ marginTop: 21, marginBottom: 30 }}
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
      </JustifyContainer>
    </ScrollView>
  );
};

export default SignUpScreen;
