import { NavLink, Outlet } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { IconLogo, LogoWrapper, StyledMain } from './Layout.styled.js';

const Layout = () => {
  return (
    <>
      <header>
        <LogoWrapper>
          <NavLink to={'/'}>
            <IconLogo src={logo} alt="icon logo" />
          </NavLink>
        </LogoWrapper>
      </header>
      <StyledMain>
        <Outlet />
      </StyledMain>
    </>
  );
};

export default Layout;
