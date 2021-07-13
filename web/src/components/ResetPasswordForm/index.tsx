import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FiArrowRight } from 'react-icons/fi';
import { ResetPasswordSchema } from '../../utils/schemas';
import { Input, Button, Card } from '../index';
import { FormStyle } from './styles';

interface IFormInput {
  email: string;
}

const ResetPasswordForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: 'onSubmit',
    resolver: yupResolver(ResetPasswordSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

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
