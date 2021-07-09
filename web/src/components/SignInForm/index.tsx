import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { Input, Button } from '../index';
import Card from '../UI/Card';
import { ResetPasswordLinkStyle } from './styles';

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
    <Card>
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
        <ResetPasswordLinkStyle>
          <Link to="/reset-password">
            <Button type="button" fontSize="17px" color="#C1C1C1">
              I forgot my password
            </Button>
          </Link>
        </ResetPasswordLinkStyle>
        {errors.password && <p>{errors.password.message}</p>}
        <Button
          type="submit"
          icon={FiArrowRight}
          color="#b5c401"
          fontSize="35px"
          margin="43px auto"
        >
          Log In
        </Button>
      </form>
    </Card>
  );
};

export default SignInForm;
