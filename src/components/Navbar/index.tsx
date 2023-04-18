import {
  MDBCollapse,
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
} from "mdb-react-ui-kit";
import { useRouter } from "next/router";
import React, { useState } from "react";
import NavbarItem from "../NavbarItem";
import valknut from "../../images/valknut.png";
import Image from "next/image";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const { pathname } = useRouter();
  return (
    <MDBNavbar expand="lg" light bgColor="light" sticky>
      <MDBContainer>
        <MDBNavbarBrand className="pe-2">
          <Image src={valknut} height="30" alt="valknut symbol" />
          Nicholas DeRissio
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav>
            <NavbarItem pathname={pathname} to="/" text="About" />
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
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navbar;
