import { Outlet } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Container, IconLogo, IconWrapper, Section } from "./Layout.styled.js";
// import logo from "../../assets/icons/logo.svg";

const Layout = () => {
  return (
    <Container>
      <Section>
        <IconWrapper>
          <IconLogo src={logo} alt="icon logo" />
        </IconWrapper>
        <Outlet />
      </Section>
    </Container>
  );
};

export default Layout;
