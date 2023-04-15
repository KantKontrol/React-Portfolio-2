import React from "react";
import icons from "../../icons";

const IconDisplay = () => {
  return (
    <div
      className="scrolling-wrapper"
      style={{
        overflowX: "scroll",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        height: 100,
        width: "100%",
      }}
    >
      {icons.map((icon) => {
        return (
          <img
            style={{ display: "inline-block" }}
            draggable={false}
            src={icon}
          />
        );
      })}
    </div>
  );
};

export default IconDisplay;
