import React from 'react';
import Loader from 'react-loader-spinner';

const LoaderSpinner: React.FC = () => {
  return (
    <Loader type="Oval" color="#B5C401" height={64} width={64} timeout={3000} />
  );
};

export default LoaderSpinner;
