import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { SERVER_URL } from "../Util/constant";

const View = () => {
  const fetchHmi = useQuery("hmi", () => axios.get(`${SERVER_URL}/hmi`));
  const [data, setData] = useState({ tag1: 20, tag2: 5, tag3: 200, tagcolor1: "red", tagcolor2: "blue" });

  return (
    <div>
      <svg viewBox="0 0 800 1200" xmlns="http://www.w3.org/2000/svg">
        {fetchHmi.data?.data?.objects?.map((comp, idx) => {
          if (comp.type === "circle") {
            return <circle cx={comp.left} cy={comp.top} r={data[comp.extra.radius]} fill="transparent" stroke="black" />;
          } else if (comp.type === "rect") {
            return <rect x={comp.left} y={comp.top} width={data[comp.extra.width]} height={comp.height} fill="transparent" stroke="black" />;
          } else if (comp.type === "text") {
            return (
              <text x={comp.left} y={comp.top} fill="black">
                {data[comp.extra.text]}
              </text>
            );
          }
        })}
      </svg>
    </div>
  );
};

export default View;
