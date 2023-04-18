import { MDBRipple, MDBTypography } from "mdb-react-ui-kit";
import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";
import Link from "next/link";

interface NavCardProps {
  title: string;
  imgSrc: StaticImageData;
  to: string;
  props?: PropsWithChildren;
}
const NavCard = ({ title, to, imgSrc, props }: NavCardProps) => {
  return (
    <MDBRipple>
      <div className="bg-image rounded" {...props}>
        <Image
          src={imgSrc}
          alt="wayne board of education"
          className="img-fluid"
        />
        <Link href={to}>
          <div
            className="mask d-flex justify-content-center align-items-center text-center"
            style={{
              backgroundColor: "rgba(57, 192, 237, 0.2)",
              color: "#FFFFFF",
            }}
          >
            <MDBTypography tag="div" className="display-6 pb-3">
              {title}
            </MDBTypography>
          </div>
        </Link>
      </div>
    </MDBRipple>
  );
};

export default NavCard;
