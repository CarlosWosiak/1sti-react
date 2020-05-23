import React from 'react';
import {Link} from 'react-router-dom';

import {
  LateralNavbarContainer,
  NavbarItem,
  NavbarContainer,
  NavigationContainer,
} from './styles.js';

export default function LateralNavbar() {
  return (
    <LateralNavbarContainer>
      <NavbarContainer>
        <NavigationContainer>
          <NavbarItem>
            <Link to='/home'>Home</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to='/about'>About</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to='/users'>Users</Link>
          </NavbarItem>
        </NavigationContainer>
      </NavbarContainer>
    </LateralNavbarContainer>
  );
}
