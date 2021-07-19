import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowRight } from 'react-icons/fi';
import { SignInForm, Button } from '../index';

import { Container } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <h1>Authentication</h1>
      <SignInForm />
      <Link to="/signup">
        <Button
          type="button"
          icon={FiArrowRight}
          color="#707070"
          fontSize="35px"
          margin="43px auto"
        >
          Sign Up
        </Button>
      </Link>
    </Container>
  );
};

export default SignIn;
