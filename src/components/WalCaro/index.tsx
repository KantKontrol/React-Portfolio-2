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
    <MDBCarousel showControls showIndicators className="rounded shadow" dark>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src={lm.src}
        alt="walrus lesson manager"
      ></MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src={le.src}
        alt="walrus lesson editor"
      ></MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src={sm.src}
        alt="walrus sponsor manager"
      ></MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={4}
        src={sc.src}
        alt="sponsor creator"
      ></MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={5}
        src={sponseditor.src}
        alt="sponsor creator"
      ></MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={6}
        src={esp.src}
        alt="sponsor creator"
      ></MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={7}
        src={se.src}
        alt="example stats"
      ></MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={8}
        src={re.src}
        alt="example ratings"
      ></MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={9}
        src={graph.src}
        alt="example graph"
      ></MDBCarouselItem>
    </MDBCarousel>
  );
};

export default WalCaro;
