import React from "react";
import icons from "../../icons";
import { MDBCol, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import Image from "next/image";

const IconDisplay = () => {
  return (
    <>
      <MDBRow>
        <MDBCol className="text-center">
          <MDBTypography tag="div" className="display-5 mb-3">
            Skills
          </MDBTypography>
        </MDBCol>
      </MDBRow>
      <MDBRow
        className=" p-2 m-1 rounded text-center shadow"
        style={{ backgroundColor: "#FAFAFA" }}
      >
        <div>
          {icons.map((icon) => {
            return (
              <Image
                key={`skill-${icon.src}`}
                width={96}
                height={96}
                draggable={false}
                src={icon}
                alt="skills icon"
              />
            );
          })}
        </div>
      </MDBRow>
    </>
  );
};

export default IconDisplay;
