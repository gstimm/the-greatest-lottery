import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FiArrowRight } from 'react-icons/fi';
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
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  return (
    <Card width="352px">
      <FormStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="Name"
            {...register('name', {
              required: 'This is a required field',
            })}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
          <Input
            type="text"
            placeholder="Email"
            {...register('email', {
              required: 'This is a required field',
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
          <Input
            type="password"
            placeholder="Password"
            {...register('password', {
              required: 'This is a required field',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters',
              },
            })}
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
