import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { SERVER_URL } from "../../Util/constant";

import Rect from "./Rect";
import Circle from "./Circle";
import Text from "./Text";

const Properties = ({ obj }) => {
  const { data } = useQuery("data", () => axios.get(`${SERVER_URL}/data`));

  let Component = null;
  if (obj?.type === "rect") {
    Component = <Rect rect={obj} data={data.data} />;
  } else if (obj?.type === "circle") {
    Component = <Circle circle={obj} data={data.data} />;
  } else if (obj?.type === "text") {
    Component = <Text text={obj} data={data.data} />;
  }

  return Component;
};

export default Properties;
