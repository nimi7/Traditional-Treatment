import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const Navigation = () => {
  const { t } = useTranslation();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to="/">{t("Navbar.1")}</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title={("גלריה")} id="collasible-nav-dropdown">
        <NavDropdown.Item ><Link to="/Update">עדכון</Link> </NavDropdown.Item>
            <NavDropdown.Item ><Link to="/Delete">מחיקה</Link> </NavDropdown.Item>
            <NavDropdown.Item ><Link to="/Update">יצירה</Link> </NavDropdown.Item>
            <NavDropdown.Item ><Link to="/Update">קריאה</Link> </NavDropdown.Item>    
          </NavDropdown>
        </Nav>
        <Nav>
          <NavDropdown title={("מאמרים")} id="collasible-nav-dropdown">
            <NavDropdown.Item ><Link to="/Update">עדכון</Link> </NavDropdown.Item>
            <NavDropdown.Item ><Link to="/Delete">מחיקה</Link> </NavDropdown.Item>
            <NavDropdown.Item ><Link to="/Create">יצירה</Link> </NavDropdown.Item>
            <NavDropdown.Item ><Link to="/Read">קריאה</Link> </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Link to="/NewsLetter">ניוזלטר</Link>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
};

export default Navigation;
