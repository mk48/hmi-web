import { useQuery } from "react-query";
import axios from "axios";
import { SERVER_URL } from "../Util/constant";

const View = () => {
  const { data: dataResponse } = useQuery("data", () => axios.get(`${SERVER_URL}/data`), { refetchInterval: 500 });
  const fetchHmi = useQuery("hmi", () => axios.get(`${SERVER_URL}/hmi`), { enabled: !!dataResponse });
  //const [data, setData] = useState({ tag1: 20, tag2: 5, tag3: 200, tagcolor1: "red", tagcolor2: "blue" });

  return (
    <div>
      <svg viewBox="0 0 800 1200" xmlns="http://www.w3.org/2000/svg">
        {dataResponse &&
          fetchHmi.data?.data?.objects?.map((comp, idx) => {
            if (comp.type === "circle") {
              return <circle key={idx} cx={comp.left} cy={comp.top} r={dataResponse.data[comp.extra.radius]} fill="transparent" stroke="black" />;
            } else if (comp.type === "rect") {
              return <rect key={idx} x={comp.left} y={comp.top} width={dataResponse.data[comp.extra.width]} height={comp.height} fill="transparent" stroke="black" />;
            } else if (comp.type === "text") {
              return (
                <text key={idx} x={comp.left} y={comp.top} fill="black">
                  {dataResponse.data[comp.extra.text]}
                </text>
              );
            }
          })}
      </svg>
    </div>
  );
};

export default View;
