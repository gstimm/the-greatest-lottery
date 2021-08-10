import React from 'react'
import { Container } from './styles';

const index: React.FC = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default index;
