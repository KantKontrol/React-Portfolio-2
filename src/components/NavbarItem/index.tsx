import { MDBNavbarItem } from "mdb-react-ui-kit";
import React from "react";
import Link from "next/link";

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
        href={to}
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
