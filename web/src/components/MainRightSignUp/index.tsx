import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import { SignUpForm, Button } from '../index';

import { Container } from './styles';

const MainRightSignUp: React.FC = () => {
  return (
    <Container>
      <h1>Registration</h1>
      <SignUpForm />
      <Link to="/">
        <Button
          type="button"
          icon={FiArrowLeft}
          color="#707070"
          fontSize="35px"
          margin="43px auto"
        >
          Back
        </Button>
      </Link>
    </Container>
  );
};

export default MainRightSignUp;
