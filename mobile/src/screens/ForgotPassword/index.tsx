import React from 'react';
import 'react-native-gesture-handler';
import { UnAuthStackList } from '../../routes/UnAuthRoutes';
import { StackNavigationProp } from '@react-navigation/stack';
import { Logo, Input, Card, Button, Footer } from '../../components/index';
import { Container, Title, JustifyContainer } from './styles';
import colors from '../../utils/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ResetPasswordSchema } from '../../utils/schemas';
import api from '../../services/api';
import { ScrollView, Dimensions } from 'react-native';

type LoginScreenNavigationProp = StackNavigationProp<UnAuthStackList, 'ForgotPassword'>

interface NavProps {
  navigation: LoginScreenNavigationProp;
}

interface ResetPasswordForm {
  email: string;
}

const ForgotPasswordScreen: React.FC<NavProps> = ({ navigation }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordForm>({
    mode: 'onSubmit',
    resolver: yupResolver(ResetPasswordSchema),
  });

  const onSubmit: SubmitHandler<ResetPasswordForm> = async data => {
    if (Object.keys(errors).length) {
      alert('Please fill email field.');
      return;
    }

    try {
      await api.post('/forgot-password', data);

      alert('Check your email to change your password.');

      navigation.navigate('Login');
    } catch (error) {
      error.response.data.errors.map((err: { message: string }) =>
        alert(err.message),
      );
    }
  };

  const windowHeight = Dimensions.get('window').height;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <JustifyContainer style={{ height: windowHeight }}>
        <Container>
          <Logo />
          <Title>Reset password</Title>
          <Card>
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
            <Button
              color={colors.lightGreen}
              title="Send link"
              iconSide="right"
              style={{ marginTop: 16, marginBottom: 20 }}
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
      </JustifyContainer>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;
