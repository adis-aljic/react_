import React from 'react';
import { useState, useEffect } from 'react';

const AuthCotext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
});

export const AuthCotextProvider = (props) => {
  const Auth = localStorage.getItem('isLoggedIn');

  useEffect(() => {
    if (Auth === 'LOGGED') {
      setIsLoggedIn(true);
    }
  }, [Auth]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', 'LOGGED');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <AuthCotext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}>
      {props.children}
    </AuthCotext.Provider>
  );
};

export default AuthCotext;
