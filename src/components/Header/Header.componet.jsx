import React from 'react';
import * as Fi from 'react-icons/fi';
import { HeaderTitle, HeaderToggle, HeaderWrapper } from './Header.style';

const Header = ({ theme, themeToggler }) => {
  return (
    <HeaderWrapper>
      <HeaderTitle>Where in the world?</HeaderTitle>
      <HeaderToggle onClick={themeToggler}>
        {theme === 'light' ? (
          <>
            <Fi.FiMoon />
            <p>Dark Mode</p>
          </>
        ) : (
          <>
            <Fi.FiSun />
            <p>Light Mode</p>
          </>
        )}
      </HeaderToggle>
    </HeaderWrapper>
  );
};

export default Header;
