import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FiArrowRight } from 'react-icons/fi';
import { Input, Button } from '../index';
import Card from '../UI/Card';
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
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  return (
    <Card>
      <FormStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="Name"
            required
            {...register('name')}
          />
          {errors.name && <p>{errors.name.message}</p>}
          <Input
            type="email"
            placeholder="Email"
            required
            {...register('email')}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <Input
            type="password"
            placeholder="Password"
            required
            minLength={8}
            {...register('password')}
          />
          {errors.password && <p>{errors.password.message}</p>}
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
