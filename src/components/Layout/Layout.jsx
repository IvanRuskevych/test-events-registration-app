import { NavLink, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import logo from '../../assets/logo.svg';
import { IconLogo, LogoWrapper, StyledMain } from './Layout.styled.js';

const Layout = () => {
  return (
    <>
      <ToastContainer />
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
