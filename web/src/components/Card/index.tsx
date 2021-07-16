import React from 'react';

import { StyledCard } from './styles';

interface IProps {
  width: string;
  margin?: string;
}

const Card: React.FC<IProps> = props => {
  return <StyledCard {...props} />;
};

export default Card;
