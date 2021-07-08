import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import AsideLogo from '../../components/AsideLogo';

const SignInPage: React.FC = () => {
  return (
    <div id="page-auth">
      <AsideLogo />
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
      <footer>Copyright 2021 Luby Software</footer>
    </div>
  );
};

export default SignInPage;
