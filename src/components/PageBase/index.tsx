import { MDBContainer } from "mdb-react-ui-kit";
import { PropsWithChildren } from "react";

const PageBase = (props: PropsWithChildren) => {
  return (
    <MDBContainer fluid className="p-0" {...props}>
      <MDBContainer
        className="p-0"
        style={{
          backgroundColor: "#ffffff",
          boxShadow: "2px 2px 2px lightgray",
        }}
      >
        {props.children}
      </MDBContainer>
    </MDBContainer>
  );
};

export default PageBase;
