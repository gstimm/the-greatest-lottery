import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FiArrowRight } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { SignUpSchema } from '../../utils/schemas';
import { Input, Button, Card } from '../index';
import { FormStyle } from './styles';
import api from '../../services/api';

interface IFormInput {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const SignUpForm: React.FC = () => {
  const { push } = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: 'onSubmit',
    resolver: yupResolver(SignUpSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async data => {
    if (Object.keys(errors).length) {
      toast.error('Please fill all fields.');
      return;
    }

    try {
      await api.post('/users', data);

      toast.success('User created successfully.');

      push('/');
    } catch (error) {
      error.response.data.errors.map((err: { message: string }) =>
        toast.error(err.message),
      );
    }
  };

  return (
    <Card width="352px">
      <FormStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input type="text" placeholder="Name" {...register('name')} />
          {errors.name && <p className="error">{errors.name.message}</p>}
          <Input type="text" placeholder="Email" {...register('email')} />
          {errors.email && <p className="error">{errors.email.message}</p>}
          <Input
            type="password"
            placeholder="Password"
            {...register('password')}
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
          <Input
            type="password"
            placeholder="Password Confirmation"
            {...register('password_confirmation')}
          />
          {errors.password_confirmation && (
            <p className="error">{errors.password_confirmation?.message}</p>
          )}
          <Button
            type="submit"
            icon={FiArrowRight}
            color="#b5c401"
            fontSize="35px"
            margin="43px auto"
          >
            Register
          </Button>
        </form>
      </FormStyle>
    </Card>
  );
};

export default SignUpForm;
