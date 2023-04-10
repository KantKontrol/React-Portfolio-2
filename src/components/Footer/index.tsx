import React from "react";

import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-start text-muted  border-top"
    >
      <section className="">
        <MDBContainer className="text-center text-md-start mt-4">
          <MDBRow className="mt-3">
            <MDBCol md="4" lg="4" xl="3" className="mx-auto mb-3">
              <h6 className="text-uppercase fw-bold mb-3">
                <MDBIcon icon="code-branch" className="me-3" />
                Nicholas DeRissio
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Social</h6>
              <p>
                <a
                  href="https://www.linkedin.com/in/nicholas-derissio/"
                  target="_blank"
                  className="me-2 text-reset"
                >
                  <MDBIcon fab icon="linkedin" className="me-2" />
                  in/nicholas-derissio
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/KantKontrol"
                  target="_blank"
                  className="me-2 text-reset"
                >
                  <MDBIcon fab icon="github" className="me-2" />
                  KantKontrol
                </a>
              </p>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                North Fort Myers, FL 33903
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                nick.derissio.tech@gmail.com
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <span className="text-reset fw-bold ms-1">nderissio.com</span>
      </div>
    </MDBFooter>
  );
};

export default Footer;
