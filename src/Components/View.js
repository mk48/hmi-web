import { useQuery } from "react-query";
import axios from "axios";
import { SERVER_URL } from "../Util/constant";
import { PageHeader } from "antd";
import { useState } from "react";

const View = () => {
  const [plcData, setPlcData] = useState(null);
  useQuery("data", () => axios.get(`${SERVER_URL}/data`), {
    refetchInterval: 500,
    onSuccess: (d) => {
      //flattern the array
      const results = d.data;
      const flatternData = {};
      results.forEach((res) => {
        flatternData[res.name] = res.val;
      });
      setPlcData(flatternData);
    },
  });
  const fetchHmi = useQuery("hmi", () => axios.get(`${SERVER_URL}/hmi`), { enabled: !!plcData });

  return (
    <PageHeader ghost={false} title="HMI Viewer" subTitle="view">
      <svg viewBox="0 0 800 1200" xmlns="http://www.w3.org/2000/svg">
        {plcData &&
          fetchHmi.data?.data?.objects?.map((comp, idx) => {
            if (comp.type === "circle") {
              return <circle key={idx} cx={comp.left} cy={comp.top} r={plcData[comp.extra.radius]} fill="transparent" stroke="black" />;
            } else if (comp.type === "rect") {
              return <rect key={idx} x={comp.left} y={comp.top} width={plcData[comp.extra.width]} height={comp.height} fill="transparent" stroke="black" />;
            } else if (comp.type === "text") {
              return (
                <text key={idx} x={comp.left} y={comp.top} fill="black">
                  {plcData[comp.extra.text]}
                </text>
              );
            }
          })}
      </svg>
    </PageHeader>
  );
};

export default View;
