import React, { useState } from 'react';
import Signin from './Signin';

const SigninBackground = () => {
  const [isSigninModalOpen, setIsSigninModalOpen] = useState(false);

  const openSigninModal = () => {
    setIsSigninModalOpen(true);
  };

  const closeSigninModal = () => {
    setIsSigninModalOpen(false);
  };

  return (
    <div>
      {isSigninModalOpen && <Signin onClose={closeSigninModal} />}
    </div>
  );
};

export default SigninBackground;
