import { MDBNavbarItem } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

interface NavItemProps {
  to: string;
  pathname: string;
  text: string;
}

const NavbarItem = ({ to, pathname, text }: NavItemProps) => {
  return (
    <MDBNavbarItem
      style={{
        padding: 12,
        fontWeight: pathname === to ? "bold" : "",
      }}
    >
      <Link to={to}>{text}</Link>
    </MDBNavbarItem>
  );
};

export default NavbarItem;
