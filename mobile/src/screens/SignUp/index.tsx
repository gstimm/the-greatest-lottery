import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { UnAuthStackList } from '../../routes/UnAuthRoutes';
import { StackNavigationProp } from '@react-navigation/stack';
import { Logo, Input, Card, Button, Footer } from '../../components/index';
import { Container, Title } from './styles';
import colors from '../../utils/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignUpSchema } from '../../utils/schemas';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { ApplicationStore } from '../../store';
import { AuthState } from '../../store/ducks/auth';
import api from '../../services/api';
import { ScrollView } from 'react-native';

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
      alert(error);
    }
  }, [error]);


  const onSubmit: SubmitHandler<SignUpForm> = async data => {
    if (Object.keys(errors).length) {
      alert('Please fill all fields.');
      return;
    }

    try {
      await api.post('/users', data);
      alert('User created successfully.');
      navigation.navigate('Login');
    } catch (error) {
      error.response.data.errors.map((err: { message: string }) =>
        alert(err.message),
      );
    }
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
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
          <Controller
            control={control}
            name='password_confirmation'
            defaultValue=''
            render={({ field: { onChange, value } }) => (
              <Input
                type='password'
                label='Password Confirmation'
                value={value}
                onChangeText={onChange}
                error={errors.password_confirmation?.message}
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
    </ScrollView>
  );
};

export default SignUpScreen;
