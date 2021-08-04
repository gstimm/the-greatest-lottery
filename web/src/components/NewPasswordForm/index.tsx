import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FiArrowRight } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { useHistory, useParams } from 'react-router-dom';
import { NewPasswordSchema } from '../../utils/schemas';
import { Input, Button, Card } from '../index';
import { FormStyle } from './styles';
import api from '../../services/api';

interface IFormInput {
  newPassword: string;
  newPassword_confirmation: string;
}

const SignUpForm: React.FC = () => {
  const { push } = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(NewPasswordSchema),
  });

  const { slug } = useParams<{ slug?: string }>();

  const onSubmit: SubmitHandler<IFormInput> = async data => {
    try {
      await api.put(`/forgot-password/${slug}`, data);

      toast.success('Password Changed Successfully.');

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
          <Input
            type="password"
            placeholder="Password"
            {...register('newPassword')}
          />
          {errors.newPassword && (
            <p className="error">{errors.newPassword?.message}</p>
          )}
          <Input
            type="password"
            placeholder="Password Confirmation"
            {...register('newPassword_confirmation')}
          />
          {errors.newPassword_confirmation && (
            <p className="error">{errors.newPassword_confirmation?.message}</p>
          )}
          <Button
            type="submit"
            icon={FiArrowRight}
            color="#b5c401"
            fontSize="35px"
            margin="43px auto"
          >
            Change
          </Button>
        </form>
      </FormStyle>
    </Card>
  );
};

export default SignUpForm;
