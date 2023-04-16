import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import esp from "./images/event_summary_participants.png";
import graph from "./images/graph_example.png";
import le from "./images/lessoneditor.gif";
import lm from "./images/lessonmanager.png";
import re from "./images/rating_example.png";
import sc from "./images/sponsorscreator.png";
import sponseditor from "./images/sponsorseditor.png";
import sm from "./images/sponsorsmanager.png";
import se from "./images/stat-example.png";

const WalCaro = () => {
  return (
    <MDBCarousel
      showControls
      showIndicators
      className="rounded shadow"
      interval={10000}
      dark
    >
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src={lm}
        alt="walrus lesson manager"
      ></MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src={le}
        alt="walrus lesson editor"
      ></MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src={sm}
        alt="walrus sponsor manager"
      ></MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={4}
        src={sc}
        alt="sponsor creator"
      ></MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={5}
        src={sponseditor}
        alt="sponsor creator"
      ></MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={6}
        src={esp}
        alt="sponsor creator"
      ></MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={7}
        src={se}
        alt="example stats"
      ></MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={8}
        src={re}
        alt="example ratings"
      ></MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={9}
        src={graph}
        alt="example graph"
      ></MDBCarouselItem>
    </MDBCarousel>
  );
};

export default WalCaro;
