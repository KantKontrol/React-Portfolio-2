import React from "react";
import PageBase from "../../components/PageBase";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import ReactMarkdown from "react-markdown";
import wvhs from "./images/wvhs.jpg";
import rut from "./images/rut.png";
import mywalrusapp from "./images/mywalrusapp.png";

import IconDisplay from "../../components/IconDisplay";

const Software = () => {
  return (
    <PageBase>
      <MDBContainer>
        <MDBRow className="p-5">
          <MDBCol className="text-center">
            <MDBTypography tag="div" className="display-5 pb-3 mb-3">
              "IT expertise and customer service."
            </MDBTypography>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <MDBTypography tag="div" className="display-6 pb-3 mb-3">
              Wayne Valley High School
            </MDBTypography>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol md="4">
            <img
              src={wvhs}
              className="img-fluid shadow-4 img-thumbnail"
              alt="..."
            />
          </MDBCol>
          <MDBCol md="8">
            <MDBRow>
              <ReactMarkdown>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Growing up I played video
                games in my leisure time. Always begging the question *"How do
                they make these?"*. Then comes my freshman year of Highschool. I
                chose a Visual Basic and C# course as one of my electives. Now,
                I can pick up programming languages rather quickly, but at the
                time it was a different story. It wasn't until sophomore year,
                when I took my first Java class, that it really clicked. We
                started off making games and programs with JComponents and it
                was just as educational as it was exciting. I was thrilled. I
                was so excited, that I even researched how to create game loops
                with threads, animate sprite sheets, and network communication
                via sockets.
              </ReactMarkdown>
            </MDBRow>
            <MDBRow>
              <ReactMarkdown>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sure enough, I kept taking
                more and more classes. Moving up to advanced and honors classes,
                I re-created data structures, real time messaging systems, 2D
                game engines, pathfinding AI. Often, our programming teacher
                would come to the advanced students (there were only about four
                of us) with extra curricular software problems. This one
                particular time, he had students in another course making Java
                classes that would be imported into a game he made. The Java
                classes all inherited from a *"Fighter"* class but of course
                overrode methods to make them unique. These classes would be
                imported into the game and they would compete. The naming
                convention is as follows: `student last name-Fighter.java `. The
                idea was to import every Java class into the game without having
                to account for every students different last name. I found a
                solution that same period. It was crazy to see how far I had
                came, and made me excited for the future. Not only did
                programming make me feel like I was on top of the world, I also
                found out how they made those games.
              </ReactMarkdown>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <MDBTypography tag="div" className="display-6 pb-3 mb-3">
              Rutgers Coding Bootcamp
            </MDBTypography>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol md="2">
            <img src={rut} className=" shadow-4 img-thumbnail" alt="..." />
          </MDBCol>
          <MDBCol md="10">
            <ReactMarkdown>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Eventually, after high school
              and working in the IT sector for a while I wanted to do more with
              software. With help from my parents to start, I ended up putting
              myself through Rutgers Coding Bootcamp. I wanted to *"dip my
              keyboard*" into web development, and I missed being in an
              educational setting. Every Tuesday, Thursday, and Saturday I would
              go straight to school after working full time. On the other days
              I'd be completing assignments after work. I put my all into it,
              because that's what I do. Not long after I graduated, a friend
              from the bootcamp reached out to me with and opportunity...Walrus.
            </ReactMarkdown>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <MDBTypography tag="div" className="display-6 pb-3 mb-3">
              My Walrus App
            </MDBTypography>
          </MDBCol>
        </MDBRow>
        <MDBRow className="align-items-center justify-content-center mb-4">
          <MDBCol sm="10">
            <MDBCarousel
              showControls
              showIndicators
              className="rounded shadow"
              interval={10000}
            >
              <MDBCarouselItem
                className="w-100 d-block"
                itemId={1}
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                alt="..."
              >
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </MDBCarouselItem>

              <MDBCarouselItem
                className="w-100 d-block"
                itemId={2}
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                alt="..."
              >
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </MDBCarouselItem>

              <MDBCarouselItem
                className="w-100 d-block"
                itemId={3}
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                alt="..."
              >
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </MDBCarouselItem>
            </MDBCarousel>
          </MDBCol>
        </MDBRow>

        <MDBRow className="mb-4">
          <MDBRow>
            <ReactMarkdown>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I finally was able to put my
              skills to use. Walrus was an online teaching platform born amidst
              *"the remote era"*. Hosts could create events, lessons for those
              events, sponsors, view analytics all through the dashboard. The
              events were marketed for their customers on our participant facing
              website, allowing participants to sign up for events. And finally,
              hosts would teach there event live, with participant chat, lesson
              display, with the capacity for multiple camera angles via our
              events app.
            </ReactMarkdown>
          </MDBRow>
          <MDBCol md="12">
            <MDBRow>
              <MDBCol sm="2">
                <img
                  src={mywalrusapp}
                  className=" shadow-4 img-thumbnail"
                  alt="..."
                />
              </MDBCol>
              <MDBCol sm="10" className="d-flex align-items-center">
                <ReactMarkdown>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Throughout my time at
                  Walrus I had the privilege of working with some truly
                  fantastic and intelligent people. Working closely with the
                  team we created software we were proud of. I created
                  functional components in ReactJS combined with numerous other
                  technologies. I had built the lesson manager/editor, sponsors
                  manager/editor, and the event feedback page. I had of course
                  supplemented these projects with their backend counterparts
                  including queries, mutations, database migrations, and more.
                  Working closely with the design team and the other engineers,
                  we made a positive environment full of creativity, support,
                  and excellence. Through Walrus I learned a lot and am truly
                  grateful for my time there. One things for sure, in any facet
                  of the technology industry, you never stop learning.
                </ReactMarkdown>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <IconDisplay />
      </MDBContainer>
    </PageBase>
  );
};

export default Software;
