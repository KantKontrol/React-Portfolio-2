import { MDBContainer } from "mdb-react-ui-kit";
import { PropsWithChildren } from "react";

const PageBase = ({ children }: PropsWithChildren) => {
  return (
    <MDBContainer fluid style={{ height: "100vh" }}>
      <MDBContainer
        style={{
          backgroundColor: "#ffffff",
          padding: 10,
          boxShadow: "2px 2px 2px lightgray",
        }}
      >
        {children}
      </MDBContainer>
    </MDBContainer>
  );
};

export default PageBase;
