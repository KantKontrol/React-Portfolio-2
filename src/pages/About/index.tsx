import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import React from "react";
import PageBase from "../../components/PageBase";
import ReactMarkdown from "react-markdown";
import NavCard from "../../components/NavCard";
import boe from "./images/boe.jpg";
import atpct from "./images/atpct.jpg";

const About = () => {
  return (
    <PageBase>
      <MDBRow>
        <MDBCol
          className="d-flex align-items-center justify-content-center text-center"
          style={{ height: 200 }}
        >
          <MDBTypography tag="div" className="display-4 mb-1">
            Welcome.
          </MDBTypography>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol
          className="d-flex align-items-center justify-content-center text-center"
          style={{ height: 100 }}
        >
          <MDBTypography tag="div" className="display-6 pb-3 mb-3">
            Please select a journey...
          </MDBTypography>
        </MDBCol>
      </MDBRow>

      <MDBRow className="p-4 gy-2 text-center">
        <MDBCol sm="6">
          <MDBRow className="d-md-none">
            <MDBTypography tag="div" className="display-6 pb-3 mb-4">
              Information Technology
            </MDBTypography>
          </MDBRow>
          <MDBRow>
            <NavCard title="Information Technology" to="/it" imgSrc={boe} />
          </MDBRow>
        </MDBCol>
        <MDBCol sm="6">
          <MDBRow className="d-md-none">
            <MDBTypography tag="div" className="display-6 pb-3 mb-4">
              Software Engineering
            </MDBTypography>
          </MDBRow>
          <MDBRow>
            <NavCard
              title="Software Engineering"
              to="/software"
              imgSrc={atpct}
            />
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </PageBase>
  );
};

export default About;
