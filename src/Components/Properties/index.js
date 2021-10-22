import React, { useEffect, useState } from "react";
import { fabric } from "fabric";
import Rect from "./Rect";
import Circle from "./Circle";

const Properties = ({ obj }) => {
  let Component = null;
  if (obj instanceof fabric.Rect) {
    Component = <Rect rect={obj} />;
  } else if (obj instanceof fabric.Circle) {
    Component = <Circle circle={obj} />;
  }

  return Component;
};

export default Properties;
