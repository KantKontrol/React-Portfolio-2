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
      }}
    >
      <Link
        to={to}
        style={{
          color: pathname === to ? "rgba(0,0,0,.9)" : "rgba(0,0,0,.55)",
        }}
      >
        {text}
      </Link>
    </MDBNavbarItem>
  );
};

export default NavbarItem;
