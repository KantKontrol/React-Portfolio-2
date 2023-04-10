import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
import { PropsWithChildren } from "react";

interface SkillCaseProps {
  skill: string;
  icon: string;
  description: string;
  fab?: boolean;
  props?: PropsWithChildren;
}

const SkillCase = ({ skill, icon, description, fab, props }: SkillCaseProps) => {
  return (
    <MDBCard alignment='center' className='p-4 h-100' {...props}>
      <MDBIcon fab={fab} fas={!fab} className="mb-3 ms-1" icon={icon} size="4x" />
      <MDBCardTitle>{skill}</MDBCardTitle>
      <MDBCardBody>{description}</MDBCardBody>
    </MDBCard>
  );
};

export default SkillCase;
