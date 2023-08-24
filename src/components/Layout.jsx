import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      {/* Add your footer or any other common elements here */}
    </div>
  );
};

export default Layout;
