import React from "react";
import PageBase from "../../components/PageBase";
import {
  MDBCol,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

const InformationTechnology = () => {
  return (
    <PageBase>
      <MDBRow className="p-5">
        <MDBCol className="text-center">
          <MDBTypography tag="div" className="display-5 pb-3 mb-3">
            "IT expertise and customer service."
          </MDBTypography>
        </MDBCol>
      </MDBRow>
      <MDBContainer className="border-start">
        <MDBRow>
          <MDBCol>
            <MDBTypography tag="div" className="display-6 pb-3 mb-3">
              Wayne Board of Education, NJ
            </MDBTypography>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol md="4">
            <img
              src="https://mdbootstrap.com/img/new/slides/041.webp"
              className="img-fluid shadow-4 img-thumbnail"
              alt="..."
            />
          </MDBCol>
          <MDBCol md="8">
            {" "}
            When I began my journey at Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aliquid eum libero rerum quia minus inventore
            molestiae, sint aliquam suscipit dolorem, ex cum. Itaque, dolores
            quam. Architecto laudantium sequi repellat hic. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Nostrum, veniam expedita unde
            natus id obcaecati dolorem praesentium quisquam blanditiis a
            dignissimos quibusdam fuga eos saepe non amet, voluptate quam
            tempore?
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="6">
            <MDBRow className="p-3">
              <MDBTypography variant="h4">Skills</MDBTypography>
            </MDBRow>
            <MDBRow className="p-4">
              <MDBListGroup style={{ minWidth: "22rem" }} light small>
                <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
                <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
                <MDBListGroupItem>Morbi leo risus</MDBListGroupItem>
                <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
                <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
              </MDBListGroup>
            </MDBRow>
          </MDBCol>
          <MDBCol md="6">
            <img
              src="https://mdbootstrap.com/img/new/slides/041.webp"
              className="img-fluid shadow-4 img-thumbnail"
              alt="..."
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </PageBase>
  );
};

export default InformationTechnology;
