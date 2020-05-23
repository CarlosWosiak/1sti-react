import styled from 'styled-components';

export const LateralNavbarContainer = styled.div`
  position: fixed;
  display: flex;
  left: 0;
  height: 100vh;
  width: 5vw;
  background-color: #ccc;
`;

export const NavbarContainer = styled.div`
  display: flex;
  transform: rotate(-90deg);
`;

export const NavigationContainer = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const NavbarItem = styled.div`
  color: black;
  text-decoration: none;
  list-style: none;
  a {
    color: black;
    text-decoration: none;
  }
`;
