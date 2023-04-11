import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import React from "react";
import PageBase from "../../components/PageBase";
import ReactMarkdown from "react-markdown";
import NavCard from "../../components/NavCard";
import boe from "./images/boe.jpg";

const About = () => {
  return (
    <PageBase>
      <MDBRow>
        <MDBCol
          className="d-flex align-items-center justify-content-center text-center"
          style={{ height: 400 }}
        >
          <MDBTypography tag="div" className="display-4 pb-3 mb-3">
            Any difficulty is overcome when passion is present.
          </MDBTypography>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol sm="6"></MDBCol>
        <MDBCol sm="6"></MDBCol>
      </MDBRow>
      <MDBRow className="p-4 gy-2">
        <MDBCol sm="6">
          <NavCard title="Information Technology" to="/it" imgSrc={boe} />
        </MDBCol>
        <MDBCol sm="6">
          <NavCard title="Software Engineering" to="/software" imgSrc={boe} />
        </MDBCol>
      </MDBRow>
    </PageBase>
  );
};

export default About;
