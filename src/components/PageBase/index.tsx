import { MDBContainer } from "mdb-react-ui-kit";
import { PropsWithChildren } from "react";

const PageBase = (props: PropsWithChildren) => {
  return (
    <MDBContainer fluid {...props}>
      <MDBContainer
        style={{
          backgroundColor: "#ffffff",
          padding: 10,
          boxShadow: "2px 2px 2px lightgray",
        }}
      >
        {props.children}
      </MDBContainer>
    </MDBContainer>
  );
};

export default PageBase;
