import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FiArrowRight } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { ResetPasswordSchema } from '../../utils/schemas';
import { Input, Button, Card } from '../index';
import { FormStyle } from './styles';

interface IFormInput {
  email: string;
}

const ResetPasswordForm: React.FC = () => {
  const { push } = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: 'onSubmit',
    resolver: yupResolver(ResetPasswordSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async data => {
    if (Object.keys(errors).length) {
      toast.error('Please fill email field.');
      return;
    }

    try {
      await api.post('/forgot-password', data);

      toast.success('Check your email to change your password.');

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
          <Input type="text" placeholder="Email" {...register('email')} />
          {errors.email && <p className="error">{errors.email.message}</p>}
          <Button
            type="submit"
            icon={FiArrowRight}
            color="#b5c401"
            fontSize="35px"
            margin="43px auto"
          >
            Send link
          </Button>
        </form>
      </FormStyle>
    </Card>
  );
};

export default ResetPasswordForm;
