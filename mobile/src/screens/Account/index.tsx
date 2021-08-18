import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { Input, Card, Button, Footer, Header } from '../../components/index';
import { Container, EditTitle, Title } from './styles';
import colors from '../../utils/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { EditProfileSchema } from '../../utils/schemas';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationStore } from '../../store';
import { AuthState, refreshAuthData } from '../../store/ducks/auth';
import api from '../../services/api';
import { ScrollView } from 'react-native';
import { TabList } from '../../routes/AuthRoutes';

type LoginScreenNavigationProp = StackNavigationProp<TabList, 'Account'>

interface NavProps {
  navigation: LoginScreenNavigationProp;
}

interface EditProfileForm {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const AccountScreen: React.FC<NavProps> = ({ navigation }) => {
  const { user, error } = useSelector<ApplicationStore, AuthState>(
    state => state.Auth,
  );

  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    register,
    formState: { errors }
  } = useForm<EditProfileForm>({ resolver: yupResolver(EditProfileSchema) })

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


  const onSubmit: SubmitHandler<EditProfileForm> = async data => {
    if (Object.keys(errors).length) {
      alert('Please fill all fields.');
      return;
    }

    data.password_confirmation = data.password;

    try {
      await api.put(`/users/${user.id}`, data);
      alert('Profile edited successfully.');
      dispatch(refreshAuthData());
      navigation.navigate('Home');
    } catch (error) {
      error.response.data.errors.map((err: { message: string }) =>
        alert(err.message),
      );
    }
  }

  return (
    <>
      <Header isNewBetPage={false} />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Container>
          <Title>Hey {user.name}!</Title>
          <Card>
            <EditTitle>Edit profile</EditTitle>
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
              title="Save"
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
        </Container>
      </ScrollView>
    </>
  );
};

export default AccountScreen;
