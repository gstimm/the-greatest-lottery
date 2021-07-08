import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { AsideLogo, Button, Footer } from '../../components';

const test = () => alert('test');

const SignInPage: React.FC = () => {
  return (
    <div id="page-auth">
      <AsideLogo />
      <Button
        text="Log In"
        icon={FiArrowRight}
        color="#b5c401"
        onClick={test}
      />
      <main>
        <div className="main-content">
          <h1>Authentication</h1>
          <form action="">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <Link to="/reset-password">I forgot my password</Link>
            <button type="submit">
              Log In
              <FiArrowRight />
            </button>
          </form>
          <Link to="/signup">Sign Up</Link>
          <FiArrowRight />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignInPage;
