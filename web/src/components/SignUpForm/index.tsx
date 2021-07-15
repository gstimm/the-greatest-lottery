import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FiArrowRight } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { SignUpSchema } from '../../utils/schemas';
import { Input, Button, Card } from '../index';
import { FormStyle } from './styles';

interface IFormInput {
  name: string;
  email: string;
  password: string;
}

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: 'onSubmit',
    resolver: yupResolver(SignUpSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);

    if (Object.keys(errors).length) {
      toast.error('Please fill all fields.');
      return;
    }

    toast.warning('Service currently unavailable, server under maintenance.');
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
