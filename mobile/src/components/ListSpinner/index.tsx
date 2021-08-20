import React from 'react';
import * as Progress from 'react-native-progress';
import { Container } from './styles';

const LoaderSpinner = () => {
  return (
    <Container>
      <Progress.Circle
        size={50}
        color='#b5c401'
        indeterminate
        borderWidth={2}
      />
    </Container>
  )
}

export default LoaderSpinner;
