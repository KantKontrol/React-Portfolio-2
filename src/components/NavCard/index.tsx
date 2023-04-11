import { MDBRipple, MDBTypography } from "mdb-react-ui-kit";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

interface NavCardProps {
  title: string;
  imgSrc: string;
  to: string;
  props?: PropsWithChildren;
}

const NavCard = ({ title, to, imgSrc, props }: NavCardProps) => {
  return (
    <MDBRipple>
      <div className="bg-image hover-overlay rounded" {...props}>
        <img
          src={imgSrc}
          alt="picture of wayne board of education"
          className="img-fluid"
        />
        <Link to={to}>
          <div
            className="mask overlay d-flex justify-content-center align-items-center text-center"
            style={{
              backgroundColor: "rgba(57, 192, 237, 0.2)",
              color: "#FFFFFF",
            }}
          >
            <MDBTypography tag="div" className="display-4 pb-3 mb-3">
              {title}
            </MDBTypography>
          </div>
        </Link>
      </div>
    </MDBRipple>
  );
};

export default NavCard;
