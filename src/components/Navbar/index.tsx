import {
  MDBCollapse,
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarNav,
  MDBNavbarToggler,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavbarItem from "../NavbarItem";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const { pathname } = useLocation();

  return (
    <MDBNavbar expand="lg" light bgColor="light" sticky>
      <MDBContainer>
        <MDBNavbarBrand className="pe-2">
          <img
            src={process.env.PUBLIC_URL + "/images/valknut.png"}
            height="30"
            alt=""
            loading="lazy"
          />
          Nicholas DeRissio
        </MDBNavbarBrand>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav>
            <NavbarItem pathname={pathname} to="/about" text="About" />
            <NavbarItem
              pathname={pathname}
              to="/it"
              text="Information Technology"
            />
            <NavbarItem
              pathname={pathname}
              to="/software"
              text="Software Engineering"
            />
          </MDBNavbarNav>
        </MDBCollapse>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navbar;
