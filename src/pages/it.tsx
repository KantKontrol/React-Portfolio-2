import React from "react";
import ReactMarkdown from "react-markdown";
import PageBase from "../components/PageBase";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import awms from "../images/awms.png";
import laf from "../images/laf.png";
import SkillCase from "../components/SkillCase";
import SkillsIt from "../util/SkillsIt.json";
import Image from "next/image";

const InformationTechnology = () => {
  return (
    <PageBase>
      <MDBContainer>
        <MDBRow className="p-5">
          <MDBCol className="text-center">
            <MDBTypography tag="div" className="display-5 pb-3 mb-3">
              &quot;IT expertise and customer service.&quot;
            </MDBTypography>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <MDBTypography tag="div" className="display-6 pb-3 mb-3">
              Wayne Board of Education, NJ
            </MDBTypography>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol lg="6" sm="12">
            <Image
              src={awms}
              className="img-fluid shadow-4 img-thumbnail"
              alt="Anthony Wayne Middle School"
            />
          </MDBCol>
          <MDBCol lg="6" sm="12">
            <ReactMarkdown>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It was nearing summer of my
              junior year in high school. I had been called down to the main
              office. The Wayne Board of Education often pulls kids from the
              advanced programming classes in hopes they could find a
              *&quot;summer helper&quot;* , someone who would be interested in
              helping out the technology department for summer projects. I
              immediately accepted the offer. The Wayne Board of Education found
              their kid, but I wasn&apos;t just any kid. I had a knack for
              computers, and have been infatuated with technology ever since I
              got my hands on my first computer many years ago. I was going to
              prove myself worthy to the technology department, I wanted to join
              there team.
            </ReactMarkdown>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol md="12">
            <ReactMarkdown>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Over that summer, I worked
              hard. Through every task I was faced with, I pushed for excellence
              hoping to prove my worth and knowledge of computers. Through a
              lifetime of tinkering with computers, passion, hard work, and of
              course the mentorship of the Wayne techs, I learned the basics of
              being an effective Computer Technician. When the time came, I
              applied for the full time position and went through the interview
              process. I became the first &quot;summer helper&quot; to be
              brought on to the team full time. I believe where there is
              passion, anything can be done.
            </ReactMarkdown>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol lg="8" md="12" sm="12">
            <ReactMarkdown>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I was now tasked to support
              the technology in four buildings. I had the responsibility of one
              middle school and three elementary schools. The responsibility was
              immense, but I was the guy for the job. I upheld a fast response
              time and effective customer service combined with strong technical
              knowledge. I communicated with administrators about upcoming
              technology changes, projects, and general maintenance in there
              respective schools. I eventually became tasked with managing the
              district inventory for Chrombook parts, and even made software to
              assist with certain tasks. By doing work I could be proud of, I
              became an integral part of the Wayne team. During my time at
              Wayne, I had the privilege of working with some of the most
              talented, hard working, and intelligent people. I am truly
              grateful for my experience there.
            </ReactMarkdown>
          </MDBCol>
          <MDBCol lg="4" md="12" sm="12">
            <Image
              src={laf}
              className="img-fluid shadow-4 img-thumbnail"
              alt="Lafayette Elementary School"
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="row-cols-1 row-cols-md-2 row-cols-lg-4 g-1 mb-3 pb-3">
          {SkillsIt.map(({ icon, skill, description, fab }) => {
            return (
              <MDBCol key={`skill-${skill}`}>
                <SkillCase
                  icon={icon}
                  skill={skill}
                  fab={fab}
                  description={description}
                />
              </MDBCol>
            );
          })}
        </MDBRow>
      </MDBContainer>
    </PageBase>
  );
};

export default InformationTechnology;
