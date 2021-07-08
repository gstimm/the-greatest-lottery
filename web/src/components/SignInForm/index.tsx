import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FiArrowRight } from 'react-icons/fi';
import { Input, Button } from '../index';
import FormCard from '../UI/FormCard';

interface IFormInput {
  email: string;
  password: string;
}

const SignInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  return (
    <FormCard>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <Button type="submit" icon={FiArrowRight} color="#b5c401">
          Log In
        </Button>
      </form>
    </FormCard>
  );
};

export default SignInForm;
