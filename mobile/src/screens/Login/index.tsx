import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { UnAuthStackList } from '../../routes/UnAuthRoutes';
import { StackNavigationProp } from '@react-navigation/stack';
import { Logo, Input, Card, Button, Footer } from '../../components/index';
import { Container, Title, ForgotText, SplashContainer, JustifyContainer } from './styles';
import colors from '../../utils/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { AuthState, loginRequest } from '../../store/ducks/auth';
import { ApplicationStore } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { SignInSchema } from '../../utils/schemas';

import { Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  interpolate,
  Extrapolate,
  withTiming
} from 'react-native-reanimated';

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

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const splashAnimation = useSharedValue(0);

  const brandStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(splashAnimation.value,
            [0, 10, 20, 45, 60],
            [520, 520, 100, 100, -1100],
            Extrapolate.CLAMP)
        }
      ],
      width: windowWidth,
      height: windowHeight,
    }
  })

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000);
    splashAnimation.value = withTiming(
      60,
      { duration: 5000 }
    );
    return () => clearTimeout(timer);
  }, [])


  return (
    <>
      {isLoading && (
        <SplashContainer>
          <Animated.Image
            source={require('../../../assets/splash.png')}
            style={brandStyle}
          />
        </SplashContainer>
      )}
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <JustifyContainer style={{ height: windowHeight }}>
          <Container>
            <Logo />
            <Title>Authentication</Title>
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
              <TouchableOpacity onPress={() => navigation.push('ForgotPassword')}>
                <ForgotText>I forget my password</ForgotText>
              </TouchableOpacity>
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
        </JustifyContainer>
      </ScrollView>
    </>
  );
};

export default LoginScreen;
