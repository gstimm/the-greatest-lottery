import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { FiArrowRight } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card, Input } from '../index';
import { ApplicationStore } from '../../store';
import { AuthState, refreshAuthData } from '../../store/ducks/auth';
import { Container, FormStyle } from './styles';
import { EditProfileSchema } from '../../utils/schemas';

import api from '../../services/api';

interface IFormInput {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const AccountData: React.FC = () => {
  const { user } = useSelector<ApplicationStore, AuthState>(
    state => state.Auth,
  );

  const dispatch = useDispatch();
  const { push } = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(EditProfileSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async data => {
    if (Object.keys(errors).length) {
      toast.error('Please fill all fields.');
      return;
    }

    try {
      await api.put(`/users/${user.id}`, data);

      toast.success('Profile edited successfully.');

      dispatch(refreshAuthData());

      push('/');
    } catch (error) {
      error.response.data.errors.map((err: { message: string }) =>
        toast.error(err.message),
      );
    }
  };

  return (
    <Container>
      <h1>Edit Profile</h1>
      <h2>Details</h2>

      <Card width="352px">
        <FormStyle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              borderBottom="none"
              type="text"
              placeholder="Name"
              {...register('name')}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
            <Input
              borderBottom="none"
              type="text"
              placeholder="Email"
              {...register('email')}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
            <Input
              borderBottom="none"
              type="password"
              placeholder="Password"
              {...register('password')}
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
            <Input
              borderBottom="none"
              type="password"
              placeholder="Confirm Password"
              {...register('password_confirmation')}
            />
            {errors.password_confirmation && (
              <p className="error">{errors.password_confirmation?.message}</p>
            )}
            <Button
              type="submit"
              color="#b5c401"
              fontSize="35px"
              icon={FiArrowRight}
              margin="43px auto"
              padding="10px 24px"
              borderRadius="10px"
            >
              Save
            </Button>
          </form>
        </FormStyle>
      </Card>
    </Container>
  );
};

export default AccountData;
