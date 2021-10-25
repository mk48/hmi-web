import React from "react";
import Rect from "./Rect";
import Circle from "./Circle";
import Text from "./Text";

const Properties = ({ obj }) => {
  let Component = null;
  if (obj?.type === "rect") {
    Component = <Rect rect={obj} />;
  } else if (obj?.type === "circle") {
    Component = <Circle circle={obj} />;
  } else if (obj?.type === "text") {
    Component = <Text text={obj} />;
  }

  return Component;
};

export default Properties;
