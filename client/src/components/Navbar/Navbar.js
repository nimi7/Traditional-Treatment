import React, { useContext } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from '../Navbar/FinalLogo.png'
import { useTranslation } from "react-i18next";
import { AdminContext } from "../../contexts/AdminContext";

const Navigation = () => {
  const { t } = useTranslation();
  const { token, logout } = useContext(AdminContext);

  return (
    <div>
      {token === "" ? (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>
            <Link to="/"> <img src={Logo} width='250px' height='70px'/>   </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/">{t("Navbar.2")}</Link>
              <Link to="/AboutUs">{t("Navbar.3")}</Link>           
            </Nav>
            <Nav>
              <Link to="/TherapistTraining">{t("Navbar.5")}</Link>
              <Link to="/Publications">{t("Navbar.6")}</Link>            
              <Link to="/login">Login</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      ) : (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link
                onClick={() => {
                  logout();
                }}
                to=""
              >
                Logout
              </Link>
            </Nav>
            <Nav>
              <Link to="/articles">Articles</Link>
              <Link to="">Gallery</Link>
              <Link to="">NewsLetter</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )}
    </div>
  );
};

export default Navigation;
